const express = require('express');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

const app = express();
connectDB(); // connect to DB

app.get('/', (req, res) => {
  res.send('api running');
});

// routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/ads', require('./routes/api/ads'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
