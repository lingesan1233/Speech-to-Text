const express = require('express');
const router = express.Router();
const axios = require('axios');
const Transcript = require('../models/Transcript');

router.post('/transcribe', async (req, res) => {
  const { message } = req.body;

  try {
    // Save to DB
    const transcript = new Transcript({ text: message });
    await transcript.save();

    res.json({ text: message });
  } catch (err) {
    res.status(500).json({ error: 'Error processing transcription' });
  }
});

module.exports = router;
const res = await fetch('https://speech-to-text-koli.onrender.com/api/transcribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: text }),
});