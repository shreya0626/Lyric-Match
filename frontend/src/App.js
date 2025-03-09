import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [lyric, setLyric] = useState('');
    const [song, setSong] = useState('');
    const [userGuess, setUserGuess] = useState('');
    const [result, setResult] = useState('');
    const [correctSong, setCorrectSong] = useState('');

    const generateLyric = async () => {
        try {
            const response = await axios.get('http://localhost:5000/generate-lyric');
            setLyric(response.data.lyric);
            setSong(response.data.song);
            setResult('');
            setCorrectSong('');
        } catch (error) {
            console.error('Error fetching lyric snippet:', error);
        }
    };

    const checkAnswer = async () => {
        try {
            const response = await axios.post('http://localhost:5000/check-answer', {
                userGuess,
                correctSong: song
            });
            setResult(response.data.isCorrect ? 'Correct!' : 'Incorrect!');
            setCorrectSong(response.data.correctSong);
        } catch (error) {
            console.error('Error checking answer:', error);
        }
    };

    return (
        <div className="App">
            <nav className="navbar">
                <h1>Lyric Match</h1>
                <button onClick={generateLyric}>New Game</button>
            </nav>
            {lyric && (
                <div className="lyric-snippet">
                    <p>{lyric}</p>
                </div>
            )}
            <input
                type="text"
                placeholder="Enter your guess"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
            />
            <button onClick={checkAnswer}>Check Answer</button>
            {result && (
                <div className="result">
                    <p>{result}</p>
                    {!result.includes('Correct') && <p>The correct song was: {correctSong}</p>}
                </div>
            )}
            <div className="music-player">
                <h2>Now Playing</h2>
                <p>Song Title - Artist</p>
            </div>
            <footer className="footer">
                <p>© 2025 Lyric Match. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;