const mongoose = require("mongoose");

const eventschema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date
    
  }
});

const Event1 = mongoose.model("Event1", eventschema);

module.exports = Event1;