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

route.delete("/delete/:id",(req,res) => {

  Event.findById(req.params.id)
  .then(event => event.remove().then(() => res.json({ success: true })))
  .catch(err => res.status(404).json({ success: false }));
})

route.patch("/update", (req, res) => {
  Event.deleteOne({ eventname: req.body.eventname })
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

route.get('/',(req,res) => {
  Event.find({},function (err, events){
    if(err){
      res.send('Error');
      next();
    }
    
    res.json({
      events
    });
  });
})
module.exports = route;
