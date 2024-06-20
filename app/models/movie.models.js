
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const Movie = sequelize.define('Movie', {
  name: {
    type: DataTypes.STRING,
    primaryKey: true
  }
}, {
  timestamps: false
});

module.exports = Movie;