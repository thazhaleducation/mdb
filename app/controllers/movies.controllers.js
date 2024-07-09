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

const create = (req, res) => {
  const movieToCreate = req.body;
  console.log(movieToCreate);
  Movie.create(movieToCreate).then(() => {
    res.status(201).send({"message": "Movie created successfully"});
  });
}

const deleteByName = (req, res) => {
  const name = req.params.name;
  Movie.destroy({where: { name }}).then(() => {
    res.status(204).send();
  })
}

const update = (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  console.log(id);
  console.log(updates);
  Movie.update(
    {...updates},
    {where: {id}}
  ).then((rows_updated) => {
    res.status(204).send();
  });
  
}

module.exports = {
  all,
  findByName,
  create,
  deleteByName,
  update
}