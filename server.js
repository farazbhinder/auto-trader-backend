const express = require('express');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

const app = express();
connectDB(); // connect to DB

app.get('/', (req, res) => {
  res.send('api running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
