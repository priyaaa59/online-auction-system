// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');  // Keep the database connection for future use

// GET /api/products
router.get('/', (req, res) => {
  console.log("GET /api/products called");

  // Reintroducing DB logic
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.error('DB error in GET /products:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });

  // Uncomment this for simple response while testing without DB
  // res.send('GET /api/products works!');
});

// POST /api/products
router.post('/', (req, res) => {
  console.log("POST /api/products called");

  // Reintroducing DB logic
  const { title, description, starting_price, end_time, user_id} = req.body;
  const sql = `
    INSERT INTO products
      (title, description, starting_price, end_time, user_id)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(sql, [title, description, starting_price, end_time, user_id], (err, result) => {
    if (err) {
      console.error('DB error in POST /products:', err);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Product added', id: result.insertId });
  });

  // Uncomment this for simple response while testing without DB
  // res.send('POST /api/products works!');
});

module.exports = router;
