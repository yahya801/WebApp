import React, { Component } from "react";
import Button from "./buttons.js";
import Popup from "reactjs-popup";
import axios from "axios";
// import "./form.css";
import { useHistory } from "react-router-dom";
import Login from "./login&register/login";

export class tickets extends Component {
  constructor(props) {
    super(props);
    // let {loginshow}= ''
    // const history = useHistory();
    this.state = {
      count: 1,
      count2: 1,
      a: this.props.basicentry || "",
      b: this.props.vipentry || "",
      basicentry: this.props.basicentry || "",
      vipentry: this.props.vipentry || "",
      userid: "",
      userrole: this.props.userrole || "",
      // history,
    };
  }

  incrementCount = () => {
    if (this.state.count < 10) {
      this.setState({
        count: this.state.count + 1,
        basicentry: this.state.basicentry + this.state.a,
      });
    }
  };
  decrementCount = () => {
    if (this.state.count > 1 || this.state.vipentry) {
      this.setState({
        count: this.state.count - 1,
        basicentry: this.state.basicentry - this.state.a,
      });
    }
  };
  incrementCount2 = () => {
    if (this.state.count2 < 10) {
      this.setState({
        count2: this.state.count2 + 1,
        vipentry: this.state.vipentry + this.state.b,
      });
    }
  };
  decrementCount2 = () => {
    if (this.state.count2 > 1 || this.state.basicentry) {
      this.setState({
        count2: this.state.count2 - 1,
        vipentry: this.state.vipentry - this.state.b,
      });
    }
  };

  handleChange(a) {
    if (a === 0) {
      console.log("hhh");
      this.setState({
        count: 1,
        basicentry: this.state.a,
      });
    } else if (a === 1) {
      console.log("hhh2");
      this.setState({
        count2: 1,
        vipentry: this.state.b,
      });
    }
  }
  handleSubmit(signup) {
    console.log(signup);
    if (signup == "Login/Register") {
      // if(this.state.history.goBack())  {}   // window.location = `/login`
      // console.log('hjh')  // console.log(window.history.back.toString)
      // loginshow = <div><Login /></div>
    }
  }

  render() {
    let { count } = this.state;
    let { basicentry } = this.state;
    let { count2 } = this.state;
    let { vipentry } = this.state;
    let { userrole } = this.state;
    let signup;
    let popup;
    let loading = false;
    let POPUP = "";
    let POPUP2 = "";
    console.log(this.props.userrole);
    if (this.props.userrole === "customer") {
      console.log("customer");
      loading = true;
      signup = "Add to cart";
      popup = (
        <Popup2
          count={count}
          count2={count2}
          vipentry={vipentry}
          basicentry={basicentry}
          eventid={this.props.eventid}
          signup={signup}
        />
      );
      POPUP = <div>{popup}</div>;
    } else {
      let msg;
      if (userrole != "customer") {
        msg = "In order to buy tickets you must login as customer";
      }
      console.log("admin  ");
      loading = true;
      signup = "Login/Register";
      popup = (
        <Popup3
          count={count}
          count2={count2}
          vipentry={vipentry}
          basicentry={basicentry}
          eventid={this.props.eventid}
          signup={signup}
          msg={msg}
        />
      );
      POPUP = <div>{popup}</div>;
    }
    let Vip = false;

    if (vipentry > 0) {
      Vip = true;
    } else {
      count2 = 0;
    }

    return (
      <div>
        <div className="row" style={{ width: "1500px", paddingLeft: "250px" }}>
          <div className="col-12">
            <div className="event-tickets">
              <div className="ticket-row flex flex-wrap justify-content-between align-items-center">
                <div className="ticket-type flex justify-content-between align-items-center">
                  <h3 className="entry-title">
                    <span>Siver Ticket</span> Basic entry
                  </h3>
                  <div className="ticket-price">Rs {basicentry}</div>
                </div>
                <div className="flex align-items-center">
                  <div
                    className="number-of-ticket flex justify-content-between align-items-center"
                    style={{ position: "inherit" }}
                  >
                    <Button title="- " task={() => this.decrementCount()} />
                    <input
                      type="number"
                      className="ticket-count"
                      Value={count}
                      disabled
                    />
                    <Button title="+" task={() => this.incrementCount()} />
                  </div>
                  <Button
                    title="Clear"
                    className="clear-ticket-count"
                    task={() => this.handleChange(0)}
                  />
                </div>
              </div>
              <div className="ticket-row flex flex-wrap justify-content-between align-items-center">
                <div className="ticket-type flex justify-content-between align-items-center">
                  <h3 className="entry-title">
                    <span>Gold Ticket</span>Vip entrry
                  </h3>
                  <div className="ticket-price">Rs {vipentry}</div>
                </div>
                <div className="flex align-items-center">
                  <div className="number-of-ticket flex justify-content-between align-items-center">
                    {/* <span className="decrease-ticket">-</span> */}
                    <Button title="- " task={() => this.decrementCount2()} />
                    <input
                      type="number"
                      className="ticket-count"
                      Value={count2}
                      disabled
                    />
                    {/* <span className="increase-ticket">+</span> */}
                    <Button title="+" task={() => this.incrementCount2()} />
                  </div>
                  <Button
                    title="Clear"
                    className="clear-ticket-count"
                    task={() => this.handleChange(1)}
                  />
                </div>

                {/* <Login /> */}
              </div>
            </div>
            {/* <Button
            type='submit'
              title={signup}
              className="clear-ticket-count"
              task={()=>this.handleSubmit(signup)}
            >
              {this.props.signup}
            </Button>  */}
            {loading ? POPUP : POPUP2}
          </div>
        </div>
      </div>
    );
  }
}

export default tickets;

class Popup2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Event: [],
      errmsg: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   componentWillMount(){
    let eventid = this.props.eventid
    axios
      .get(`http://localhost:3000/event/eventdetails/${eventid}`)
      .then((response) => {
        console.log(response.data.event);
        this.setState({
          Event: response.data.event
        })
        console.log(this.state.Event)
  })}

  handleSubmit(e) {
    // wind;
    console.log("jhgf");
    const cart = {
      count: this.props.count,
      count2: this.props.count2,
      totalprice: this.props.vipentry + this.props.basicentry,
      eventid: this.props.eventid,
      userid: localStorage.getItem("id"),
      eventname: this.state.Event.eventname,
      category: this.state.Event.category,
      city: this.state.Event.city,
      location: this.state.Event.location
    };
    console.log(cart);

    axios
      .post(`http://localhost:3000/booking/eventbooking`, cart)
      .then((response) => {
        console.log(response.data);
        window.location =`/cart`
      })
      .catch((err) => {
        //  console.log(err);
        console.error(err.response.data);
        this.setState({ errmsg: err.response.data.msg });
        console.log(this.state.errmsg);
      });
      
      //   this.setState({
      // //    loggedin: true,
      //   });
      //   if (response.data.user.role == "super-admin"){
      //       console.log('hell')
      //     window.location= 'http://localhost:3000/admin/resources/user';

      //   }
      //   if (response.data.user.role == "admin"){
      //       console.log('hell')
      //     //  window.location= '/orgdash';

      //   }
      //   if(response.data.user.role == 'customer'){
        
      //   }
      //   // window.location = "/read-events";
        //window.location= 'http://localhost:3000/admin/resources/user';
      
  }
  render() {
    return (
      <div>
         <div style={{color: "red"}}> {this.state.errmsg}
       </div>
        <button onClick={this.handleSubmit} type="button">
          {this.props.signup}
        </button>
      
      </div>
    );
  }
}
class Popup3 extends Component {
  constructor(props) {
    super(props);
    let loggedin = false;
    this.state = {
      email: "",
      password: "",
      errors: "",
      loggedin,
      errmsg: "",
      open: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    // this.state = { open: false };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {};
  onredirect = (e) => {
    window.location.replace("//http://localhost:3000/admin/resources/user");
  };
  handleSubmit(e) {
    console.log("jhgjf");
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post(`http://localhost:3000/user/signin`, userData)
      .then((response) => {
        console.log(response.data.user);
        localStorage.setItem("id", response.data.user.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.user.name);

        this.setState({
          loggedin: true,
          // open: false,
        });

        if (response.data.user.role == "super-admin") {
          console.log("hell");
          window.location = "http://localhost:3000/admin/resources/user";
        }
        if (response.data.user.role == "admin") {
          console.log("hell");
          this.setState({
            open: false,
          });
        }
        if (response.data.user.role == "customer") {
          this.closeModal();
          window.location = `/singleevent/${this.props.eventid}`;
        }
        // window.location = "/read-events";
        //window.location= 'http://localhost:3000/admin/resources/user';
      })
      .catch((err) => {
        //  console.log(err);
        console.error(err.response.data);
        this.setState({ errmsg: err.response.data.msg });
        console.log(this.state.errmsg);
      });
    // this.closeModal()
  }

  render() {
    const { errors } = this.state;
    let { loggedin } = this.state;
    let close = "";
    if (loggedin) {
      console.log("Hogaya");
    }

    return (
      <div>
        <Popup
          modal
          trigger={<button>{this.props.signup}</button>}
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          {this.props.msg}
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
                              Email address
                            </label>
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              id="email"
                              aria-describedby="emailHelp"
                              placeholder="Enter email"
                              onChange={this.onChange}
                              value={this.state.email}
                              error={errors.email}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Password</label>
                            <input
                              type="password"
                              name="password"
                              id="password"
                              className="form-control"
                              aria-describedby="emailHelp"
                              placeholder="Enter Password"
                              onChange={this.onChange}
                              value={this.state.password}
                              error={errors.password}
                            />
                          </div>
                          <div>{this.state.errmsg}</div>
                          <div className="form-group">
                            <p className="text-center">
                              By signing up you accept our{" "}
                              <a href="#">Terms Of Use</a>
                            </p>
                          </div>
                          <div className="col-md-12 text-center ">
                            <button
                              type="submit"
                              className=" btn btn-block mybtn btn-primary tx-tfm"
                            >
                              Login
                            </button>
                          </div>
                          <div className="col-md-12 ">
                            <div className="login-or">
                              <hr className="hr-or" />
                              <span className="span-or">or</span>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <p className="text-center">
                              <a
                                href="javascript:void();"
                                className="google btn mybtn"
                              >
                                <i className="fa fa-google-plus"></i> Signup
                                using Google
                              </a>
                            </p>
                          </div>
                          <div className="form-group">
                            <p className="text-center">
                              Don't have account?{" "}
                              <a href="/register" id="signup">
                                Sign up here
                              </a>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* }} */}
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}

class Loginmsg extends Component {
  render() {
    return (
      <div>
        <Popup modal trigger={this.props.loggedin}>
          The User has been successfully Logged in.
        </Popup>
      </div>
    );
  }
}
