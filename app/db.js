const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'passc0de',
  database: 'mdb'
});

connection.connect();

module.exports = connection;

// connection.query("select * from movies", (err, rows, fields) => {
//   if (err) throw err;
  
//   console.log(rows[1]);
// });

// connection.end();