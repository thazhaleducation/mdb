
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const Movie = sequelize.define('Movie', {
  name: {
    type: DataTypes.STRING
  },
  release_date: {
    type: DataTypes.DATE,
  },
  story_line: {
    type: DataTypes.TEXT
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  }
}, {
  timestamps: false
});

module.exports = Movie;