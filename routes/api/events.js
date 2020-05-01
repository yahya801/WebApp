const express = require("express");
const Event = require("../../models/events");
const Image = require("../../models/eventimage");
const route = express.Router();
const upload = require("../../middleware/upload");

route.post("/create", (req, res) => {
 
  const {
    eventname,
    date,
    location,
    category,
    description,
    price,
    time,
  } = req.body;
  if (
    !eventname ||
    !date ||
    !location ||
    !category ||
    !description ||
    !price ||
    !time
  ) {
    return res.status(400).json({ msg: "Please enter all Event details" });
  }
  Event.findOne({ eventname }).then((event) => {
    if (event) return res.status(400).json({ msg: "Event already exists" });
  });

  let event = {};
  event.eventname = eventname;
  event.location = location;
  event.description = description;
  event.category = category;
  event.price = price;
  event.date = date;
  event.time = time;
  
  let eventmodal = new Event(event);
  eventmodal.save();
  console.log(eventmodal);
  res.json(eventmodal);
});
route.post("/upload-image", (req, res) => {


}
)

route.delete("/delete/:id", (req, res) => {
  Event.findById(req.params.id)
    .then((event) => event.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

route.patch("/update", (req, res) => {
  Event.deleteOne({ eventname: req.body.eventname })
    .exec()
    .then((user) => {
      console.log(user);
      console.log("hehhhh");
      return res.sendStatus(200);
    });
});
route.get("/edit/:id", (req, res) => {
  Event.findOne(req.param.id).then((event) => {
    return res.json({
      event,
    });
  });
});
route.get("/:eventname", (req, res) => {
  Event.find(req.param.eventname).then((userfound) => {
    return res.json({
      user: {
        userfound,
      },
    });
  });
});

route.get("/", (req, res) => {
  Event.find({}, function (err, events) {
    if (err) {
      res.send("Error");
      next();
    }

    res.json({
      events,
    });
  });
});
module.exports = route;
