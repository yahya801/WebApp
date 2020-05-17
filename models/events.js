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
    default: "Private",
    enum:["Private","Corperate","Charity"]
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
    required:true
  },
  time: {
    type: String,
    required: true
  },
  city:{
    type: String,
    required: true
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",  
    required: true
  }
});

const Event = mongoose.model("Events", eventschema);

module.exports = Event;
