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

studentRouter.put('/:id', (req, res, next) => {
  console.log('entering campus put server', req.body);
  Students.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true,
    plain: true
  })
  .then(response => {
    // console.log('response[0]:', response[0]);
    // console.log('response[1]', response[1].dataValues);
    return response[1].dataValues;
  })
  .then(newInstObj => {
    console.log('exiting put request in student', newInstObj);
    res.send(newInstObj);
  })
});

module.exports = studentRouter;
