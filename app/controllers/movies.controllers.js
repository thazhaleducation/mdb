const movies = require("../data.js");

const all = (req, res) => {
  res.status(200).json(movies);
}

module.exports = {
  all
}