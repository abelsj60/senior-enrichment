'use strict';
const express = require('express');
const campusRouter = express.Router()
const models = require('../db/models');
const Campus = models.Campus;

campusRouter.get('/', (req, res, next) => {
  console.log('entering campus get server', req.body);
  Campus.findAll()
  .then(campuses => {
    console.log('exiting campus get server');
    res.json(campuses);
  });
});

campusRouter.get('/:id', (req, res, next) => {
  console.log('entering campus get :id server', req.params.id);
  Campus.findById(req.params.id)
    .then(campus => {
      console.log('exiting campus get :id server', campus);
      res.json(campus);
  })
});

campusRouter.post('/', (req, res, next) => {
  console.log('entering campus post server', req.body);
  Campus.create(req.body)
    .then(newCampus => {
      console.log('exiting campus post server', newCampus);
      res.send();
  });
});

campusRouter.put('/:id', (req, res, next) => {
  console.log('entering campus put server', req.body);
  Campus.update(req.body, {
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
    console.log('exiting put request in campus', newInstObj);
    res.send(newInstObj);
  })
});

module.exports = campusRouter;
