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
  console.log('entering student route',req.body)
  Students.findById(req.params.id)
    .then(student => {
      console.log('exiting rstudent oute', student);
      res.json(student)}
    );
});

studentRouter.post('/', (req, res, next) => {
  console.log('entering student server for post', req.body);
  Students.create(req.body)
    .then(newStudent => {
      console.log('exiting student server for post', newStudent);
      res.send();
    })
    .catch(next);
});

module.exports = studentRouter;
