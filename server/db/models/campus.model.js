'use strict'
const db = require('../index');
const Sequelize = require('sequelize');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlphanumeric: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://matttoomb.files.wordpress.com/2011/04/bsg_seal.jpg'
  }
});

module.exports = Campus;
