const express = require("express");
const Event = require("../../models/events");
const User = require("../../models/users");
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
    basictickets,
    viptickets,
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
    !time ||
    !basictickets
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
  event.basictickets = basictickets;
  event.viptickets = viptickets;
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

route.get("/eventdetails/:id", (req, res) => {
  const eventid = req.params.id;
  Event.findById(eventid)
    .then((event) => {
      return res.json({
        event,
      });
    })
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
  Event.findById(req.params.id)
    .then((event) => {
      return res.json({
        event,
      });
    })
    .catch((err) => res.status(404).json({ success: false }));
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
      })
      .catch((err) => res.status(404).json({ success: false }));
  } else if (!Eventname && !Date && City) {
    Event.find({ city: City.toLowerCase() })
      .sort({ date: -1 })
      .then((events) => {
        return res.json({
          events,
        });
      })
      .catch((err) => res.status(404).json({ success: false }));
  } else if (Eventname && !Date && !City) {
    console.log("hjkdbhjv");
    Event.find({ eventname: Eventname.toLowerCase() })

      .sort({ date: -1 })
      .then((events) => {
        console.log(events);
        return res.json({
          events,
        });
      })
      .catch((err) => res.status(404).json({ success: false }));
  } else if (!Eventname && Date && !City) {
    console.log("hjkdbhjv3");
    Event.find({ date: Date })

      .sort({ date: "desc" })
      .then((events) => {
        console.log(events);
        return res.json({
          events,
        });
      })
      .catch((err) => res.status(404).json({ success: false }));
  } else if (Eventname && Date && !City) {
    Event.find({ eventname: Eventname.toLowerCase(), date: Date })

      .sort({ date: "desc" })
      .then((events) => {
        console.log(events);
        return res.json({
          events,
        });
      });
  } else if (Eventname && !Date && City) {
    Event.find({ eventname: Eventname.toLowerCase(), city: City.toLowerCase() })

      .sort({ date: "desc" })
      .then((events) => {
        console.log(events);
        return res.json({
          events,
        });
      })
      .catch((err) => res.status(404).json({ success: false }));
  } else if (Eventname && Date && City) {
    Event.find({
      eventname: Eventname.toLowerCase(),
      date: Date,
      city: City.toLowerCase(),
    })

      .sort({ date: -1 })
      .then((events) => {
        console.log(events);
        return res.json({
          events,
        });
      })
      .catch((err) => res.status(404).json({ success: false }));
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

  let userdata;
  let userid = req.query.userid;
  console.log(userid);
  // let userdata
  if (userid) {
    User.find({ _id: userid })
      .then((user) => {
        userdata = user;

        console.log(userdata);
      })
      .catch((err) => res.status(404).json({ success: false }));
  }
  console.log(userdata);
  //  newuser.name = user.name
  //  console.log(newuser)
  Event.findById(req.params.ID)
    .then((event) => {
      console.log(event);
      return res.json({
        event,
        userdata,
      });
    })
    .catch((err) => res.status(404).json({ success: false }));
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
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  let category = req.query.category || "";
  console.log("hello2");
  if (!category) {
    Event.find({})
      .sort({ date: "desc" })
      .skip(startIndex)
      .limit(limit)

      .then((events) => {
        return res.json({
          events,
        });
      });
  } else {
    Event.find({ category })
      .sort({ date: "desc" })
      .skip(startIndex)
      .limit(limit)

      .then((events) => {
        return res.json({
          events,
        });
      });
  }
});

route.get("/countofevent",(req,res) =>{
 let category = req.query.category 
 console.log(req.query)
 if(category == 'Private' || category == "Corperate" || category =='Charity'){
  Event.countDocuments({category: category}).exec()
  .then((count)=> {
    
    return res.json ({
      count,
      msg: "help",
      category
    })
  })
 }
 else{
  Event.countDocuments().exec()
    .then((count)=> {
      return res.json ({
        count
      })
    }) }
} )
module.exports = route;
