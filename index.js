const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes/transcribeRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB error:', err));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
// index.js or inside routes/chatRoutes.js
app.post('/', async (req, res) => {
  const { message } = req.body;

  // Save to MongoDB or process as needed
  const newMessage = new Message({ text: message });
  await newMessage.save();

  res.json({ text: message }); // respond with JSON
});
