// routes/products.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // make sure db.js exists

// GET all products
router.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Database error');
    }
    res.json(results);
  });
});

module.exports = router;
