const { Movie } = require('../models');

const all = (req, res) => {
  Movie.getAll().then((movies) => {
    res.status(200).json(movies);
  });
}

module.exports = {
  all
}