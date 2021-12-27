const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'mUu8>a8E-,E>;:7Q',
  database: 'election'
});

module.exports = db;
