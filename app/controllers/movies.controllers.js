
const connection = require("../db.js");

const all = (req, res) => {
  
  connection.query("select * from movies", (err, rows, fields) => {
    if (err) throw err;

    var movies = [];
    rows.forEach(row => {
      movies.push({ name: row.name });
    });

    res.status(200).json(movies);
  });
  
}

module.exports = {
  all
}