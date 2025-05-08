const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');
require('dotenv').config(); // ✅ Load .env file BEFORE anything else

const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const bidRoutes = require('./routes/bidRoutes');

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve image files
app.use('/images', express.static(path.join(__dirname, 'images')));

// API Routes
app.use('/api/products', productRoutes);
console.log("Product Routes Loaded");

app.use('/api/auth', authRoutes);
console.log("Auth Routes Loaded");

app.use('/api', bidRoutes);
console.log("Bid Routes Loaded");

// Test route
app.get('/api/test', (req, res) => {
  res.send('Test route is working!');
});

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
