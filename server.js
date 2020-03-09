const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const users = require("./models/users");


const app = express();

//Body-parser middleware
app.use(bodyparser.json());

//Db config
const db = require("./Config/key").mongoURI;
//connect to mongo
mongoose
  .connect(db,{ useUnifiedTopology: true, useNewUrlParser: true  })
  .then(() => console.log("MongoDb Connected..."))
  .catch(err => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port} `));
