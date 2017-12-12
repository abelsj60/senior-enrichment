'use strict'
const db = require('../index');
const Sequelize = require('sequelize');

const Students = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  gpa: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 4
    }
  },
  fullName: {
    type: Sequelize.VIRTUAL,
    get () {
      return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName');
    }
  }
});

module.exports = Students;
