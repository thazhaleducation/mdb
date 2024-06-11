const connection = require("../db.js");

class Movie {
  constructor(name) {
    this.name = name;
  }

  // connect to database
  // select * from movies
  // convert database row into movie object

  static getAll() {
    return new Promise((resolve, reject) => {
      connection.query("select * from movies", (err, rows, fields) => {
        if (err) reject(err);

        var movies = [];
        rows.forEach(row => {
          movies.push(new Movie(row.name));
        });
        resolve(movies);
      });
    })
    
  }
}

module.exports = Movie;