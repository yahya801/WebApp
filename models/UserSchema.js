const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  eventname: String,
  Date: Date,
  location: String,
  Category: String,
  Description: String,
  Price: Number
});

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  Events: [EventSchema]
});

const User = mongoose.model("newuser", UserSchema);

module.exports = User;
