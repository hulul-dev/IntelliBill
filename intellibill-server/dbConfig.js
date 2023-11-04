const mysql = require('mysql2');

const db = mysql.createPool({
  host: '154.41.233.154',
  user: 'u543208198_haseeb',
  password: 'Haseeb@100',
  database: 'u543208198_haseeb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = db;