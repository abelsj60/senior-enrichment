'use strict';
const express = require('express')
const studentRouter = express.Router()
const models = require('../db/models');
const Students = models.Students;

studentRouter.get('/', (req, res, next) => {
  Students.findAll()
    .then(students => res.json(students));
});

studentRouter.get('/:id', (req, res, next) => {
  console.log('entering route',req.body)
  Students.findById(req.params.id)
    .then(student => {
      console.log('exiting route', student)
      res.json(student)}
    );
});

module.exports = studentRouter;
