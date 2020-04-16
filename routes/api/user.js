const express = require("express");
const User = require("../../models/users");

const route = express.Router();
const bycrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

//Register Api
route.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  //simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all details" });
  }
  //check for existing user
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newuser = new User({
      name,
      email,
      password,
    });
    //Salt and Hash
    bycrypt.genSalt(10, (err, salt) => {
      bycrypt.hash(newuser.password, salt, (err, hash) => {
        if (err) throw err;

        newuser.password = hash;
        newuser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            config.get("JWT_SECRET"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});

route.post("/signin", (req, res) => {
  const { email, password } = req.body;
  //simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all details" });
  }
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User doesnot exists" });

    //Validate Password

    bycrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
      jwt.sign(
        { id: user.id },

        config.get("JWT_SECRET"),
        { expiresIn: 3600 },
        (err, token) => {
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  });
});

route.get("/get", (req, res) => {
  User.find()
    .exec()
    .then((user) => {
      console.log(user);
      res.status(200).json(user);
    });
});

//  console.log("Got a GET request for the homepage");
//  res.json(User);

module.exports = route;
