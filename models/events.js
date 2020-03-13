const moongoes = require("mongoose");

const eventschema = new moongoes.Schema({
  eventname: {
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
    default: Date.now
  }
});

const Event = moongoes.model("Events", eventschema);

module.exports = Event;  