const express = require("express");
const Event = require("../../models/events");
const route = express.Router();

route.post("/create", (req, res) => {
  const { eventname, date, location, category, description, price } = req.body;
  let event = {};
  event.eventname = eventname;
  event.location = location;
  event.description = description;
  event.category = category;
  event.price = price;
  event.date = date;
  let eventmodal = new Event(event);
  eventmodal.save();
  console.log(eventmodal);
  res.json(eventmodal);
});

route.patch("/update", (req, res) => {
  Event.findOneAndUpdate({ eventname: req.body.eventname })
    .exec()
    .then(user => {
      console.log(user);
      console.log("hehhhh");
      return res.sendStatus(200);
    });
});

route.get("/:eventname", (req, res) => {
  Event.find(req.param.eventname)
  .then(userfound => {
    return res.json({
      user: {
        userfound 
      }
    }
    
     );
  });
});
module.exports = route;
