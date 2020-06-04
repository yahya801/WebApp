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
    city,
    category,
    description,
    basicentry,
    vipentry,
    time,
    userid,
    organizername,
    companyname,
  } = req.body;
  if (
    !eventname ||
    !date ||
    !location ||
    !city ||
    !category ||
    !description ||
    !basicentry ||
    !time
  ) {
    console.log("hello");
    return res.status(400).json({ msg: "Please enter all Event details" });
  }
  Event.findOne({ eventname: eventname.toLowerCase() }).then((event) => {
    if (event) return res.status(400).json({ msg: "Event already exists" });
  });

  let event = {};
  event.eventname = eventname.toLowerCase();
  event.location = location.toLowerCase();
  event.city = city.toLowerCase();
  event.description = description;
  event.category = category;
  event.basicentry = basicentry;
  event.vipentry = vipentry;
  event.date = date;
  event.time = time;
  event.userid = userid;
  event.organizername = organizername;
  event.companyname = companyname;

  let eventmodal = new Event(event);
  eventmodal.save();
  console.log(eventmodal);
  res.json(eventmodal);
});
route.post("/upload-image", (req, res) => {});

route.delete("/delete/:id", (req, res) => {
  Event.findById(req.params.id)
    .then((event) => event.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

// route.patch("/update", (req, res) => {
//   Event.deleteOne({ eventname: req.body.eventname })
//     .exec()
//     .then((user) => {
//       console.log(user);
//       console.log("hehhhh");
//       return res.sendStatus(200);
//     });
// });
route.get("/edit/:id", (req, res) => {
  Event.findById(req.params.id).then((event) => {
    return res.json({
      event,
    });
  });
});
route.get("/search", (req, res) => {
  let Eventname = req.query.eventname;
  let Date = req.query.date;
  let City = req.query.city;
  console.log(Date);
  console.log(City);
  console.log(Eventname.toLowerCase());
  // const query =
  // console.log(query)
  if (!Eventname && !Date && !City) {
    console.log("kjabchv");
    Event.find({})
      .sort({ date: -1 })
      .then((events) => {
        return res.json({
          events,
        });
      });
  } else if (!Eventname && !Date && City) {
    Event.find({ city: City.toLowerCase() })
      .sort({ date: -1 })
      .then((events) => {
        return res.json({
          events,
        });
      });
  } else if (Eventname && !Date && !City) {
    console.log("hjkdbhjv");
    Event.find({ eventname: Eventname.toLowerCase() })

      .sort({ date: -1 })
      .then((events) => {
        console.log(events);
        return res.json({
          events,
        });
      });
  } else if (!Eventname && Date && !City) {
    console.log("hjkdbhjv3");
    Event.find({ date: Date })

      .sort({ date: -1 })
      .then((events) => {
        console.log(events);
        return res.json({
          events,
        });
      });
  } else if (Eventname && Date && !City) {
    Event.find({ eventname: Eventname.toLowerCase(), date: Date })

      .sort({ date: -1 })
      .then((events) => {
        console.log(events);
        return res.json({
          events,
        });
      });
  } else if (Eventname && !Date && City) {
    Event.find({ eventname: Eventname.toLowerCase(), city: City.toLowerCase() })

      .sort({ date: -1 })
      .then((events) => {
        console.log(events);
        return res.json({
          events,
        });
      });
  } else if (Eventname && Date && City) {
    Event.find({ eventname: Eventname.toLowerCase(), date: Date, city: City.toLowerCase() })

      .sort({ date: -1 })
      .then((events) => {
        console.log(events);
        return res.json({
          events,
        });
      });
  }
});

route.put("/update/:id", (req, res) => {
  console.log(req.body);
  Event.findOneAndUpdate(
    req.param.id,
    {
      eventname: req.body.eventdata.eventname,
      location: req.body.eventdata.location,
      description: req.body.eventdata.description,
      category: req.body.eventdata.category,
      price: req.body.eventdata.price,
      date: req.body.eventdata.date,
      time: req.body.eventdata.time,
    },
    { new: true }
  )
    .then((event) => {
      if (!event) {
        return res.status(404).send({
          message: "Product not found with id " + req.params.productId,
        });
      }
      res.send(event);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Product not found with id " + req.params.productId,
        });
      }
      return res.status(500).send({
        message:
          "Something wrong updating note with id " + req.params.productId,
      });
    });
});
// route.get("/:eventname", (req, res) => {
//   Event.find(req.param.eventname).then((userfound) => {
//     return res.json({
//       user: {
//         userfound,
//       },
//     });
//   });
// });
route.get("/singleevent/:ID", (req, res) => {
  // console.log(req.params.ID)
  Event.findById(req.params.ID).then((event) => {
    return res.json({
      event,
    });
  });
});

route.get("/", (req, res) => {
  const userid = req.query.userid;
  console.log(userid);
  Event.find({ userid: userid }, function (err, events) {
    if (err) {
      res.send("Error");
      next();
    }

    res.json({
      events,
    });
  });
});

route.get("/categorysearch", (req, res) => {
  let category = req.query.category;
  console.log("hello2");
  if (!category) {
    Event.find({})
      .sort({ date: -1 })
      .then((events) => {
        return res.json({
          events,
        });
      });
  } else {
    Event.find({ category })
      .sort({ date: -1 })
      .then((events) => {
        return res.json({
          events,
        });
      });
  }
});
module.exports = route;
