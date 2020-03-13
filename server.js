const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require('cors')



const app = express();
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

//redirect to /user
app.use('/user',require('./routes/api/user'));
app.use('/event',require('./routes/api/events'));

  

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port} `));
