const { Movie } = require('../models');

const all = (req, res) => {
  Movie.findAll().then((movies) => {
    res.status(200).json(movies);
  });
}

const findByName = (req, res) => {
  const name = req.params.name;
  Movie.findByPk(name).then(movie => {
    res.status(200).json(movie);
  });
}

module.exports = {
  all,
  findByName
}