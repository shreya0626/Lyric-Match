Lyric Match - AI-Powered Song Guessing Game
Overview
Lyric Match is a web application that challenges users to guess the title of an English song based on a short snippet of its lyrics, provided by an AI. The application consists of a React JS frontend and a Node.js backend, integrated with Google's Gemini API to generate lyric snippets.

Features
Generate Lyric Snippet: Users can generate a short lyric snippet from a random English song.

Guess the Song: Users can input their guess for the song title.

Check Answer: The application checks if the user's guess matches the correct song title.

Result Display: The application displays whether the guess is correct or incorrect, and the actual song title if incorrect.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or higher)

npm (usually comes with Node.js)

Git

Setup Instructions
1. Clone the Repository
bash
Copy
git clone https://github.com/your-username/lyric-match.git
cd lyric-match
2. Set Up the Backend
Navigate to the backend directory:

bash
Copy
cd backend
Install the required dependencies:

bash
Copy
npm install
Create a .env file in the backend directory and add your Gemini API key:

env
Copy
GEMINI_API_KEY=your_gemini_api_key_here
Start the backend server:

bash
Copy
npm start
The backend server will run on http://localhost:5000.

3. Set Up the Frontend
Navigate to the frontend directory:

bash
Copy
cd ../frontend
Install the required dependencies:

bash
Copy
npm install
Start the frontend development server:

bash
Copy
npm start
The frontend application will run on http://localhost:3000.

4. Running the Application
Ensure both the backend and frontend servers are running.

Open your web browser and navigate to http://localhost:3000.

Use the "Generate Lyric Snippet" button to get a lyric snippet.

Enter your guess in the input field and click "Check Answer" to see if your guess is correct.

Project Structure
Copy
lyric-match/
├── backend/
│   ├── node_modules/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
└── README.md
Dependencies
Backend
express: Web framework for Node.js

axios: HTTP client for making API requests

cors: Middleware for enabling CORS

dotenv: Loads environment variables from a .env file

Frontend
react: JavaScript library for building user interfaces

axios: HTTP client for making API requests

Troubleshooting
Backend Server Not Running: Ensure that the .env file is correctly set up with the Gemini API key.

Frontend Not Connecting to Backend: Ensure that the backend server is running on http://localhost:5000 and that there are no CORS issues.

Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.
