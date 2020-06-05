const mongoose = require("mongoose");
const bookingschema = new mongoose.Schema(
  {
    eventname: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },
    eventid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Events",
      required: true,
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
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
    cart: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingschema);

module.exports = Booking;
