require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Mednow API is running.' });
});

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('Connection failed:', err.message);
  });