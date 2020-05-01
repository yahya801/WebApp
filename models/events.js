const mongoose = require("mongoose");
// const DateOnly = require('mongoose-dateonly')(mongoose);

const eventschema = new mongoose.Schema({
  eventname: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  image: {
    type: String,
    
  },
});

const Event = mongoose.model("Events", eventschema);

module.exports = Event;
