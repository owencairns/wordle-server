const WORDS = require('./Words')
const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors middleware

app.use(cors()); // Use the cors middleware to set the Access-Control-Allow-Origin header

app.get('/word', (req, res) => {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  const randomWord = WORDS[randomIndex];
  res.send({ secret: randomWord }); // Send the word as a JSON object
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});