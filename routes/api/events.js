const express = require("express");
const Event = require("../../models/events");
const route = express.Router();

route.post('/',(req,res)=>{
    const { eventname, description, price, date } = req.body;
    let event = {};
  event.eventname = eventname;
  event.description = description;
  event.price = price;
  event.date = date;
  let eventmodal = new Event(event);
  eventmodal.save();
  console.log(eventmodal);
  res.json(eventmodal);
})

route.patch('/update',(req,res) => {
    Event.findOneAndUpdate ({ eventname: req.body.eventname})
    .exec()
    .then(user => {
      console.log(user);
      console.log("hehhhh");
      return res.sendStatus(200);
})})
module.exports = route;

