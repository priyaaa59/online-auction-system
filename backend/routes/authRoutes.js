const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db'); // Make sure this is correctly connecting to your database
require('dotenv').config();

const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Input validation
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Please provide username, email, and password' });
  }

  // Check if email already exists
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (result.length > 0) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash the password and store user
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      db.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, hashedPassword],
        (err, result) => {
          if (err) {
            return res.status(500).json({ error: 'Failed to register user' });
          }
          res.status(201).json({ message: 'User registered successfully' });
        }
      );
    } catch (error) {
      res.status(500).json({ error: 'Error hashing password' });
    }
  });
});

// Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Input validation
  if (!username || !password) {
    return res.status(400).json({ error: 'Please provide username and password' });
  }

  // Check if user exists
  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, result) => {
    if (err || result.length === 0) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const user = result[0];

    // Compare password with hashed password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Login successful',
      token,
      userId: user.id,
    });
  });
});

module.exports = router;
