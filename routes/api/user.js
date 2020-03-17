const express = require("express");
const mongoose = require("mongoose");
const User = require("../../models/users");
const route = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../Config/key");
// Load input validation
const validateRegisterInput = require("../../Validation/Register");
const validateLoginInput = require("../../Validation/Login");
  
 

route.post("/register", (req, res) => {
  //Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  //Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      }
      else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        //Hash password before saving in the Database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
});


route.post("/login", (req, res) => {
  //Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //Find email by user
  User.findOne({ email }).then(user => {
    //check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found!" });
    }
    //check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //User Matched
        //Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        //Sign token 
        jwt.sign(
          payload,
          keys.secretOrKey, {
          expiresIn: 31556926 //1 year in seconds 
        },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer" + token
            });
          }
        );
      }
      else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password is incorrect" });
      }
    });
  });
});


route.post("/", (req, res) => {
  const { name, email, password, date } = req.body;
  let user = {};
  user.name = name;
  user.email = email;
  user.password = password;
  user.date = date;
  let usermodal = new User(user);
  usermodal.save();
  console.log(usermodal);
  res.json(usermodal);
  res.status(201).json({ some: "response" });
});


route.post("/login1", function (req, res) {
  User.findOne({ email: req.body.email } && { password: req.body.password })
    .then(user => {
      console.log(user);
      console.log("hehhhh");
      return res.sendStatus(200);
    });
});
//  console.log("Got a GET request for the homepage");
//  res.json(User);

module.exports = route;