const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const db = require('./db'); 

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Blog Platform API running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
