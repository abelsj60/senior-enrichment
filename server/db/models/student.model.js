'use strict'
const db = require('../index');
const Sequelize = require('sequelize');

const Students = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isAlpha: true,
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
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
    allowNull: false,
    defaultValue: 0,
    validate: {
      isFloat: true
    }
  },
  fullName: {
    type: Sequelize.VIRTUAL,
    get () {
      return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName');
    }
  }
}, {
  hooks: {
    beforeValidate: function (post, object) {
      if (typeof post.gpa !== 'number') {
        post.gpa = 0;
      }
    }
  }
});

module.exports = Students;
