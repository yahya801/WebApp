const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require('cors');
const passport = require("passport");
const app = express();

const user = require("./routes/api/user");
const event = require("./routes/api/event");



//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:5000',
    credentials: true,
  })
);

//Body-parser middleware
app.use(bodyparser.json());

//Db config
const db = require("./Config/key").mongoURI;
//connect to mongo
mongoose
  .connect(db,{ useUnifiedTopology: true, useNewUrlParser: true  })
  .then(() => console.log("MongoDb Connected..."))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/user", user);
app.use("/event", event);

  

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port} `));
