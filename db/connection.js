const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // visca_barca2026
  database: 'shopifydb'         // ✅ my real DB name
});

db.connect(err => {
  if (err) {
    console.error('❌ Database connection error:', err);
    return;
  }
  console.log('✅ Connected to MySQL');
});

module.exports = db;

