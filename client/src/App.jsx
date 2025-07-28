import React, { useState, useEffect } from 'react';

const App = () => {
  const [transcript, setTranscript] = useState('');
  const [messages, setMessages] = useState([]);

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';

    recognition.onresult = async (event) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);

      const res = await fetch('https://speech-to-text-koli.onrender.com/api/transcribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      setMessages(prev => [...prev, data]);
    };

    recognition.start();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">🗣️ Live Speech-to-Text App</h1>
      <div className="flex justify-center mb-4">
        <button
          onClick={handleVoiceInput}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Start Voice Input 🎙️
        </button>
      </div>

      <div className="max-w-2xl mx-auto bg-white shadow p-4 rounded">
        <p className="text-gray-700">🎧 <strong>Live Input:</strong> {transcript}</p>
        <hr className="my-4" />
        <h2 className="text-xl font-semibold mb-2">📝 Saved Transcripts:</h2>
        {messages.map((msg, i) => (
          <div key={i} className="mb-2 p-2 bg-gray-50 border rounded">
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
