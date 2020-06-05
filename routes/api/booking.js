const express = require("express");
const Booking = require("../../models/booking");
const Event = require("../../models/events");
const route = express.Router();

async function eventfind(req,cal){
    Event.findById(req.eventid).then((event) => {
        console.log(event);
        let eventbooking;
        eventbooking.eventname = event.eventname;
        eventbooking.category = event.category;
        eventbooking.location = event.location;
        eventbooking.city = event.city;
        
        console.log(eventbooking);
        success = true;
        return eventbooking
}
    )
}
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
 console.log('jhff')
 
//  console.log(eventbooking)
  let success = false;
  
  let booking = {};
  booking.eventid = eventid;
  booking.userid = userid;

  booking.normalticket = count;
  booking.vipticket =count2;
  booking.totalprice = totalprice;
  booking.cart = cart;
  booking.eventname = eventname;
  booking.category =category;
  booking.location =location;
  booking.city =    city;
  console.log("hjj");

  
    //   console.log(success, 'jh')
    console.log(booking);
    let bookingmodal = new Booking(booking);
    bookingmodal.save();
    console.log(bookingmodal);
    res.json(bookingmodal);
  
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

module.exports = route;
