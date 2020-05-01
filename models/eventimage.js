const mongoose = require("mongoose");
const imageschema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
      },
      eventname: {
          type: String, 
          required: true
      }
})