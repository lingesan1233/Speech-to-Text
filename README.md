# 🗣️ Live Speech-to-Text App (MERN Stack)

This is a full-stack speech-to-text application using the **MERN stack** (MongoDB, Express, React, Node.js) with **Tailwind CSS**. The app captures **live voice input** using the browser's Web Speech API (`webkitSpeechRecognition`), displays the transcribed text, and stores it in MongoDB.

---

## 🚀 Features

- 🎙️ Live voice-to-text conversion
- 📋 Real-time transcript display
- 💾 Save transcriptions in MongoDB
- 🧠 MERN stack architecture
- 🎨 Tailwind CSS UI

---

## 🧱 Tech Stack

| Layer      | Tech                          |
|------------|-------------------------------|
| Frontend   | React (Vite), Tailwind CSS    |
| Backend    | Node.js, Express.js           |
| Database   | MongoDB Atlas                 |
| Speech API | Web Speech API (Browser API)  |

---

## 📁 Project Structure

speech-to-text/
├── client/ # Frontend (React + Vite + Tailwind CSS)
│ └── src/
│ └── App.jsx
├── server/ # Backend (Node.js + Express + MongoDB)
│ ├── routes/
│ │ └── transcribeRoutes.js
│ ├── models/
│ │ └── Transcript.js
│ └── index.js


🌐 API Endpoint
POST /api/transcribe

Accepts { message: "speech text" }

Saves the text to MongoDB

Returns { text: "speech text" }

🧪 How It Works
Click the 🎙️ Start Voice Input button

Speak — browser converts your voice into text using SpeechRecognition

The transcript is:

displayed live on the page

sent to backend /api/transcribe

saved to MongoDB

All transcripts are displayed on the page

🧾 Example MongoDB Document

{
  "_id": "64c7e49a9f3f6d23c1a47c21",
  "text": "This is a test transcription",
  "createdAt": "2025-07-28T12:45:00.000Z",
  "__v": 0
}
📷 UI Snapshot
🎤 Microphone button

📄 Transcript preview

💾 Saved messages listed with timestamps

⚠️ Browser Compatibility
This app uses webkitSpeechRecognition, supported in:

✅ Chrome

✅ Edge

🚫 Not supported in Firefox or Safari
