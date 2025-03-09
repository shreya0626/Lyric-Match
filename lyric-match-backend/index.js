const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Serve static files from the React app (optional)
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Lyric Match API!');
});

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

const songs = [
    "Bohemian Rhapsody",
    "Hotel California",
    "Stairway to Heaven",
    "Imagine",
    "Hey Jude",
    "Smells Like Teen Spirit",
    "Rolling in the Deep",
    "Shape of You",
    "Blinding Lights",
    "Billie Jean",
    "Dance Monkey",
    "Uptown Funk",
    "Someone Like You",
    "Shallow",
    "Halo",
    "Bad Guy",
    "Old Town Road",
    "Despacito",
    "Thunder",
    "Roar"
];

app.get('/generate-lyric', async (req, res) => {
    try {
        const randomSong = songs[Math.floor(Math.random() * songs.length)];
        const prompt = `Generate 2-4 lines of lyrics from the song "${randomSong}" without revealing the song title.`;

        const response = await axios.post(
            GEMINI_API_URL,
            {
                contents: [
                    {
                        parts: [
                            { "text": prompt }
                        ]
                    }
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-goog-api-key': process.env.GEMINI_API_KEY
                }
            }
        );

        const lyricSnippet = response.data.candidates[0].content.parts[0].text.trim();
        res.json({ lyric: lyricSnippet, song: randomSong });
    } catch (error) {
        console.error('Error generating lyric snippet:', error);
        res.status(500).json({ error: 'Failed to generate lyric snippet' });
    }
});

app.post('/check-answer', (req, res) => {
    const { userGuess, correctSong } = req.body;
    const isCorrect = userGuess.trim().toLowerCase() === correctSong.toLowerCase();
    res.json({ isCorrect, correctSong });
});

// Handle React routing, return all requests to React app (optional)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});