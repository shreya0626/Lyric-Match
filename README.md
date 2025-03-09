# Lyric Match

Lyric Match is a fun web-based game where players guess the song title based on provided lyrics. The application utilizes a React frontend, Node.js/Express backend, and an AI-based lyrics generation system.

## Features

- Randomly selects lyrics from a set of songs.
- Users enter their guesses for the song title.
- Displays correct/incorrect responses and keeps track of scores.
- Interactive UI with real-time feedback.

## Tech Stack

- Frontend: React.js
- Backend: Node.js with Express.js
- AI Integration: Large Language Model (LLM) for lyric generation
- Database: MongoDB (optional for storing scores)

---

## Setup and Installation

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (if using a database for scores)

### Clone the Repository

```sh
git clone https://github.com/yourusername/lyric-match.git
cd lyric-match
```

### Install Dependencies

#### Backend

```sh
cd server
npm install
```

#### Frontend

```sh
cd client
npm install
```

### Running the Application

#### Start the Backend Server

```sh
cd server
npm start
```

The backend server will run at `http://localhost:5000`.

#### Start the Frontend

```sh
cd client
npm start
```

The frontend will be available at `http://localhost:3000`.

---

## API Endpoints

- `GET /api/lyrics` - Fetches a random lyric snippet
- `POST /api/guess` - Checks the user's guess against the correct song title
- `GET /api/scores` - (Optional) Retrieves the leaderboard

---

## How to Play

1. Start the application and navigate to `http://localhost:3000`.
2. Read the displayed lyric snippet.
3. Type your guess for the song title and submit.
4. The application will validate your guess and update the score.
5. Try to get as many correct answers as possible!
---
![image](https://github.com/user-attachments/assets/2eb222b2-1f27-495e-837c-527693033aa2)
---
![image](https://github.com/user-attachments/assets/43fb84cc-8fed-496a-8112-3d8c84c5d97e)

---

## Future Enhancements

- Implement multiplayer mode with WebSockets.
- Improve AI lyric selection and expand song database.
- Add a hints feature for players.
- Deploy to a cloud platform for global access.

## License

This project is licensed under the MIT License.

## Author

Developed by [Shreya C]([https://github.com/yourusername](https://github.com/shreya0626)). Contributions are welcome!

