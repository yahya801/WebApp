const moongoes = require("mongoose");

const eventschema = new moongoes.Schema({
  eventname: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true

  },
  category: {
    type: String,
    required: true

  },  
  description:{
      type: String,
      required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    
  },
  
});

const Event = moongoes.model("Events", eventschema);

module.exports = Event;  