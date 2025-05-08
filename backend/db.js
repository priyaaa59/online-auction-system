// backend/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'lasya',         // your DB user
  password: '2004',      // your DB password
  database: 'auction_system'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to database.');
});

module.exports = db;
