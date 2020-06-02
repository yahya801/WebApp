const express = require("express");
const Booking = require("../../models/booking");
const route = express.Router();

route.post("/eventbooking", (req, res) => {
  const {
    eventid,
    userid,
    bookingdate,
    normalticket,
    vipticket,
    totalprice,
  } = req.body;
  if (!eventid || !userid  || !totalprice) {
    return res.status(400).json({ msg: "Booking not processed" });
  }
  let booking = {};
  booking.eventid = eventid;
  booking.userid = userid;
  booking.bookingdate = bookingdate;
  booking.normalticket = normalticket;
  booking.vipticket = vipticket;
  booking.totalprice = totalprice;

  let bookingmodal = new Booking(booking);
  bookingmodal.save();
  console.log(bookingmodal);
  res.json(bookingmodal);
});

module.exports = route;
