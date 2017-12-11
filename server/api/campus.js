'use strict';
const express = require('express');
const campusRouter = express.Router()
const models = require('../db/models');
const Campus = models.Campus;

campusRouter.get('/', (req, res, next) => {
  console.log('entering server', req.body);
  Campus.findAll()
  .then(campuses => {
    console.log('exiting server', campuses)
    res.json(campuses);
  });
});

campusRouter.get('/:id', (req, res, next) => {
  console.log('entering server', req.params.id);
  Campus.findById(req.params.id)
    .then(campus => {
      console.log('exiting server', campus);
      res.json(campus);
    })
});

campusRouter.post('/', (req, res, next) => {
  console.log('entering server for post', req.body);
  Campus.create(req.body)
    .then(newCampus => {
      console.log('exiting server', newCampus);
    });
  });

module.exports = campusRouter;
