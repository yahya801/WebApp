import React, { Component } from "react";
import "./checkout.css";
import axios from "axios";
import moment from "moment";
import Popup from "reactjs-popup";

export default class checkoutform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      userid: localStorage.getItem("id"),
      username: "",
      email: "",
      totalamount: 0,
      paynow: false,
      booking: [],
      count: [],
      count2 : []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentWillMount() {
    axios
      .get(`http://localhost:3000/booking/cart/${this.state.userid}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ cart: response.data.cartevents });
        console.log(this.state.cart);
      });
    axios
      .get(`http://localhost:3000/user/navbar/${this.state.userid}`)
      .then((res) => {
        console.log(res.data.user);
        this.setState({
          username: res.data.user.name,
          email: res.data.user.email,
        });
      });
  }
  handleSubmit(e) {
    console.log("lllll");
    this.setState({
      paynow: true,
    });
    console.log(this.state.booking);
  }

  render() {
    let { cart } = this.state;
    let { totalamount } = this.state;
    let { booking } = this.state;
    let { count } = this.state;
    let { count2 } = this.state;
 
    for (var i = 0; i < cart.length; i++) {
      totalamount = totalamount + cart[i].totalprice;
      booking.push(cart[i]._id);
      count.push(cart[i].normalticket);
      
      count2.push(cart[i].vipticket);
    }
    // console.log(booking)
    // this.setState({
    //     booking: booking
    // })
    // console.log(this.state.booking)
    let { paynow } = this.state;
    let PAYNOW;
    if (paynow) {
      console.log("paynow");
      PAYNOW = (
        <div>
          <CheckoutPopup
            userid={this.state.userid}
            booking={booking}
            totalamount={totalamount}
            paynow={paynow}
            count={count}
            count2={count2}
          />
        </div>
      );
    }
    return (
      <div>
        <div className="container" style={{ right:"150px"}}>
          <div className="row">
            <div className="well col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <address>
                    <strong>{this.state.username}</strong>
                    <br />
                    {this.state.email}
                    <br />
                    {/* Los Angeles, CA 90026 */}
                    <br />
                    <abbr title="Phone">Phone</abbr> (213) 484-6829
                  </address>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 text-right">
                  <p>
                    <em>Date: {moment().format("LL")}</em>
                  </p>
                  <p>
                    <em>Receipt #: 34522677W</em>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="text-center">
                  <h1>Receipt</h1>
                </div>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th>Normal Ticket</th>
                      <th>Vip Ticket</th>
                      {/* <th className="text-center">Price</th> */}
                      <th className="text-center">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.cart.map((Cart) => (
                      <tr Key={Cart._id}>
                        <td className="col-md-9">
                          <em>{Cart.eventname.toUpperCase()}</em>
                        </td>
                        <td
                          className="col-md-1"
                          style={{ textAlign: "center" }}
                        >
                          {Cart.normalticket}
                        </td>
                        <td
                          className="col-md-1"
                          style={{ textAlign: "center" }}
                        >
                          {Cart.vipticket}
                        </td>
                        <td className="col-md-1 text-center">
                          Rs {Cart.totalprice}
                        </td>
                      </tr>
                    ))}

                    <tr>
                      <td> &nbsp; </td>
                      <td> &nbsp; </td>
                      <td className="text-right">
                        <p>
                          <strong>Subtotal:&nbsp;</strong>
                        </p>
                        <p>
                          <strong>Tax:&nbsp;</strong>
                        </p>
                      </td>
                      <td className="text-center">
                        <p>
                          <strong>Rs{totalamount}</strong>
                        </p>
                        <p>
                          <strong>Rs0.0</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td> &nbsp; </td>
                      <td> &nbsp; </td>
                      <td className="text-right">
                        <h4>
                          <strong>Total:&nbsp;</strong>
                        </h4>
                      </td>
                      <td className="text-center text-danger">
                        <h4>
                          <strong>Rs{totalamount}</strong>
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* <div > */}
                <button
                  type="button"
                  onClick={this.handleSubmit}
                  className="btn btn-success btn-lg btn-block"
                //   style={{position: "absolute", right:"150px"}}
                >
                  Pay Now&nbsp;&nbsp;&nbsp;
                  <span className="glyphicon glyphicon-chevron-right" />
                </button>
                {/* </div> */}
              </div>
            </div>
            {/* <CheckoutPopup /> */}
            {paynow ? PAYNOW : null}
          </div>
        </div>
        
      </div>
    );
  }
}

class CheckoutPopup extends Component {
  constructor(props) {
    super(props);
    let loggedin = false;
    this.state = {
      cardholdername: "",
      cardno: "",
      expdate: "",
      cvv: "",
      //  errors: ""
    };

    // this.state = { open: false };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit(e) {
    console.log("jhgjf");
    e.preventDefault();
    
   var booking= this.props.booking
   var count = this.props.count
   var count2 = this.props.count2
   var querystring = require('querystring');
    const creditcardData = {
      cardholdername: this.state.cardholdername,
      cardno: this.state.cardno,
      expdate: this.state.expdate,
      cvv: this.state.cvv,
      userid: this.props.userid,
    //  
    };
    console.log(count)
    console.log(creditcardData)
    axios
      .post(`http://localhost:3000/creditcard/payment?name=${this.state.cardholdername}&no=${this.state.cardno}&date=${this.state.expdate}&cvv=${this.state.cvv}&userid=${this.props.userid}&`+querystring.stringify({'booking':JSON.stringify(booking)}, creditcardData))
      .then((response) => {
        console.log(response.data.user);
        window.location =`/userdash`
        this.setState({
        //   loggedin: true,
          // open: false,
        });
    })
    const tickets ={

    }
    // axios
    // .put(`http://localhost:3000/event/updatenormal`+querystring.stringify({'count':JSON.stringify(count)}))
    // .then((response) => {
    //     console.log(response.data.user);

    //     this.setState({
    //     //   loggedin: true,
    //       // open: false,
    //     });
    // })
    // axios
    // .put(`http://localhost:3000/event/updatevip`+querystring.stringify({'count2':JSON.stringify(count2)}))
    // .then((response) => {
    //     console.log(response.data.user);

    //     this.setState({
    //     //   loggedin: true,
    //       // open: false,
    //     });
    // })

    // window.location = "/read-events";
    //window.location= 'http://localhost:3000/admin/resources/user';
    //   })
    //   .catch((err) => {
    //     //  console.log(err);
    //     console.error(err.response.data);
    //     this.setState({ errmsg: err.response.data.msg });
    //     console.log(this.state.errmsg);
    //   });
    // this.closeModal()
}

  render() {
    // const { errors } = this.state;
    // let { loggedin } = this.state;
    // let close = "";
    // if (loggedin) {
    //   console.log("Hogaya");
    // }
    return (
      <div>
        <Popup modal open={this.props.paynow}>
          <div>
            {/* <Login /> */}
            <div>
              {/* {close => { */}
              <a className="close" onClick={this.closeModal}>
                &times;
              </a>
              <div className="container">
                <div className="row">
                  <div className="col-md-5 mx-auto">
                    <div id="first">
                      <div className="myform form ">
                        <div className="logo mb-3">
                          <div className="col-md-12 text-center"></div>
                        </div>
                        <form onSubmit={this.handleSubmit} name="login">
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Card Holder Name
                            </label>
                            <input
                              type="text"
                              name="cardholdername"
                              className="form-control"
                              id="cardholdername"
                              aria-describedby="emailHelp"
                              placeholder="Card Holder Name"
                              onChange={this.onChange}
                              value={this.state.cardholdername}
                              //   error={errors.email}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Card Number
                            </label>
                            <input
                              type="text"
                              name="cardno"
                              id="cardno"
                              className="form-control"
                              //   aria-describedby="emailHelp"
                              placeholder="Card No"
                              onChange={this.onChange}
                              value={this.state.cardno}
                              //   error={errors.password}
                            />
                          </div>

                          <div>
                            <label htmlFor="exampleInputEmail1">
                              Expiration Date
                            </label>
                            <input
                              type="month"
                              id="expdate"
                              name="expdate"
                              min="2018-03"
                              onChange={this.onChange}
                              value={this.state.expdate}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">CVV</label>
                            <input
                              type="number"
                              name="cvv"
                              id="cvv"
                              className="form-control"
                              //   aria-describedby="emailHelp"
                              placeholder="cvv"
                              onChange={this.onChange}
                              value={this.state.cvv}
                              //   error={errors.password}
                            />
                          </div>
                          <div>{this.state.errmsg}</div>
                          <div className="form-group">
                            {/* <p className="text-center">
                              By signing up you accept our{" "}
                              <a href="#">Terms Of Use</a>
                            </p> */}
                          </div>
                          <div className="col-md-12 text-center ">
                            <button
                              type="submit"
                              className=" btn btn-block mybtn btn-primary tx-tfm"
                            >
                              Pay Now
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ;{/* </div> */}
        </Popup>
      </div>
    );
  }
}
