const express = require('express')
const mongoose = require('mongoose')
const User = require('../../models/users')
const route = express.Router()


route.post('/',  (req,res)=>{
    const { name,email,password,date} = req.body ;
    let user = {}
    user.name = name;
    user.email = email;
    user.password = password;
    user.date = date;
    let usermodal = new User(user);
     usermodal.save();
    console.log(usermodal);
    res.json(usermodal)
    res.status(201).json({"some":"response"})
})

module.exports = route;