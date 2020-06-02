const mongoose = require("mongoose");
const bookingschema = new mongoose.Schema(
  {
    eventid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Events",
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    bookingdate: {
      type: Date,
      default: Date.now,
    },
    normalticket: {
      type: Number,
    },
    vipticket: {
      type: Number,
    },
    totalprice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingschema);

module.exports = Booking;
