const express = require('express');
const mongoose = require('mongoose');  // Add this line to import mongoose
const cors = require('cors');
const bodyParser = require('body-parser');
const connectToMongo = require('./db');  // Import the connection function
const authRoutes = require('./routes/auth'); // Import auth routes

const app = express();
const port = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectToMongo();  // Connect to MongoDB when the server starts

// Mount the auth routes
app.use('/api/auth', authRoutes);

const path = require('path');
app.use('/uploadphoto', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
