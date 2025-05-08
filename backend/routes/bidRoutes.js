// routes/bidRoutes.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('./auth'); // Adjust if needed
const db = require('../db');

router.post('/place-bid', authenticateToken, (req, res) => {
    const { itemId, bidAmount } = req.body;
    const userId = req.user.id;

    if (!itemId || !bidAmount) {
        return res.status(400).json({ message: 'Missing itemId or bidAmount' });
    }

    const sql = 'INSERT INTO bids (item_id, user_id, bid_amount) VALUES (?, ?, ?)';
    db.run(sql, [itemId, userId, bidAmount], function (err) {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        res.json({ message: 'Bid placed successfully' });
    });
});

module.exports = router;
