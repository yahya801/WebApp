const mongoose = require("mongoose");

const creditcardschema = new mongoose.Schema({
  cardholdername: {
    type: String,
    required: true,
  },
  cardno: {
    type: Number,
    required: true,
  },
  expdate: {
    type: String,
    required: true,
  },
  cvv: {
    type: Number,
    required: true,
  },

  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});
const Creditcard = mongoose.model("creditcard", creditcardschema);

module.exports = Creditcard;
