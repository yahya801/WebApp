const express = require("express");
const Booking = require("../../models/booking");
const Event = require("../../models/events");
const route = express.Router();

route.post("/eventbooking", (req, res) => {
  const {
    eventid,
    userid,
    eventname,
    city,
    location,
    category,
    count,
    count2,
    totalprice,
  } = req.body;
  let cart = false;
  if (!eventid || !userid || !totalprice) {
    return res.status(400).json({ msg: "Booking not processed" });
  }
  let eventbooking = {};
  // console.log(eventfind(eventid))
  console.log("jhff");

  //  console.log(eventbooking)
  let success = false;

  let booking = {};
  booking.eventid = eventid;
  booking.userid = userid;

  booking.normalticket = count;
  booking.vipticket = count2;
  booking.totalprice = totalprice;
  booking.cart = cart;
  booking.eventname = eventname;
  booking.category = category;
  booking.location = location;
  booking.city = city;
  console.log("hjj");
//  var success=  false
  Booking.findOne({ eventid: eventid, userid: userid }).then((event) => {
    if (event) return res.status(400).json({ msg: "Event already in Cart or Booked. Visit Cart to complete checkout" });
    console.log(event);success= true
   
      //   console.log(success, 'jh')
      console.log(booking);
      let bookingmodal = new Booking(booking);
      bookingmodal.save();
      console.log(bookingmodal);
      let event1 = {};
      Event.findById(eventid).then((event) => {
        event1 = event;
        console.log(event1);
      });

      Event.findOneAndUpdate(
        eventid,
        {
          $inc: { basictickets: -event1.basictickets },
          $inc: { viptickets: -event1.viptickets },
        },
        // basictickets: event1.basictickets - booking.basictickets,
        // viptickets: event1.viptickets - booking.viptickets
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

      res.json(bookingmodal);
    
  });
});

route.get("/cart/:userid", (req, res) => {
  const userid = req.params.userid;
  let cart;
  Booking.find({ userid: userid, cart: false })
    .sort({ date: -1 })
    .then((cartevents) => {
      console.log(cartevents);

      return res.json({
        cartevents,
      });
    });
});

route.get("/categorysearch", (req, res) => {
  let category = req.query.category;
  let userid = req.query.userid;
  Booking.find({ userid: userid, category: category, cart: true }).then(
    (events) => {
      console.log(events);
      return res.json({
        events,
      });
    }
  );
});
route.delete("/delete/:id", (req, res) => {
  Booking.findById(req.params.id)
    .then((event) => event.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = route;
