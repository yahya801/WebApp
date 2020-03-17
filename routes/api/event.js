const express = require("express");
const mongoose = require("mongoose");
const Event = require("../../models/event");
const route = express.Router();


route.get('/1', (req, res) => {
    Event.find()
      .then(events => res.json(events))
      .catch(err => res.status(400).json('Error: ' + err));
  });

route.post('/add', (req, res) => {
    const {
        name,
        description,
        date
    } = req.body
 

  const newEvent = new Event({
    name,
    description,
    date,
  });

  newEvent.save()
  .then(() => res.json('Event added!'))
  .catch(err => res.status(400).json('msg: ' + err));
});

// route.get('/:id', (req, res) => {
//     Event.findById(req.params.id)
//       .then(event => res.json(event))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

// route.delete('/:id', (req, res) => {
//   Event.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Event deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// route.post('/update/:id', (req, res) => {
//     Event.findById(req.params.id)
//       .then(event => {
//         event.name = req.body.name;
//         event.description = req.body.description;
//         event.date = Date.parse(req.body.date);
  
//         event.save()
//           .then(() => res.json('Event updated!'))
//           .catch(err => res.status(400).json('Error: ' + err));
//       })
//       .catch(err => res.status(400).json('Error: ' + err));
//   });
  
  module.exports = route;
