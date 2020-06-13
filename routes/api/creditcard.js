const express = require("express");
const Booking = require("../../models/booking");
const Creditcard = require("../../models/creditcard");
const Event = require("../../models/events")
const route = express.Router();

route.post("/payment", (req, res) => {
//   const { cardholdername, cardno, expdate, cvv, userid, } = req.body;
  console.log(req.query)
 const cardholdername = req.query.name
 const cardno = req.query.no
 const expdate = req.query.date
 const cvv = req.query.cvv
 const userid = req.query.userid
  console.log(req.body)
  console.log('jjj')
  var booking = JSON.parse(req.query['booking']);
//   var normalticket =JSON.parse(req.query['count']);
//   var vipticket =JSON.parse(req.query['count2']);
//   console.log(normalticket)
  console.log(req.body)
  if (!cardholdername || !cardno || !expdate || !cvv || !userid) {
    console.log("hello");
    // return res.status(400).json({ msg: "Please enter all Event details" });
  } else {
    let creditcard = {};
    creditcard.cardholdername = cardholdername;
    creditcard.cardno = cardno;
    creditcard.expdate = expdate;
    creditcard.cvv = cvv;
    creditcard.userid = userid;
    let creditcardmodal = new Creditcard(creditcard);
    creditcardmodal.save();
    console.log(creditcardmodal)
    console.log('kkk')
    events=[]
    for(i=0;i<booking.length; i++) {
        console.log(booking[i])
        let b = booking[i]
        console.log(b)
        Booking.findOneAndUpdate({_id: b},{
            cart: true
        }, { new: true })
        .then((event) => {
          
            console.log(booking[i])
            if (!event) {
              return res.status(404).send({
                message: "Product not found with id " + req.params.productId,
              });
            }
            console.log(event)
            // res.send(event);
          })
    }
    // for(i=0;i<booking.length; i++) {
    //     let b = booking[i]
    //     let c;
    //     let d;
    //     let e;
    //     Booking.find({_id: b})
    //         .then((event) => {
    //             c = event.normalticket
    //             d= event.vipticket
    //             e = event.eventid
    //         Event.findOneAndUpdate({_id: e },{
    //             $inc: {
    //                 basictickets: -c,
    //                 viptickets : -d
    //                   }
    //         }, { new: true })
    //         .then((event) => {
    //             console.log(booking[i])
    //             if (!event) {
    //               return res.status(404).send({
    //                 message: "Product not found with id " + req.params.productId,
    //               });
    //             }
    //             console.log(event)
    //             res.send(event);
    //           })
            
    //         })
    // }
    console.log(creditcardmodal);
   
    // res.json(creditcardmodal);
  }
});
module.exports = route;