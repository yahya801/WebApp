import React, { Component } from "react";
import Link from 'react-dom'
import "./navbar.css";
import axios from "axios";

export class navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: localStorage.getItem("id") || "",
      username: "" || localStorage.getItem("user") ,
      tag1: "",
      link1: "",
      link2: "",
      cart:"",
      carttag: ""
    };
  }
  async componentWillMount() {
    if(this.state.userid){
    axios
      .get(`http://localhost:3000/user/navbar/${this.state.userid}`)
      .then((res)=> {
          console.log(res.data.user)
          if(res.data.user){
            if(res.data.user.role == 'admin'){
              this.setState({
                link2: '/orgdash'
              })
            }
            else if(res.data.user.role == 'customer'){
              this.setState({
                link2: '/userdash',
                cart: '/cart',
                carttag: "Cart"
              })
            }

          }
      })
    }
    console.log(this.state.username);
    let tag = "";
    let link = "";
    if (this.state.username != null) {
      tag = "Logout";
      link = "/logout";
    } else {
      tag = "Login/Register";
      link = "/login";
    }
    // console.log(link)
    // this.state.tag = tag;
    // this.state.link = link;
    this.setState({
      tag1: tag,
      link1: link
    })
    console.log(this.state.link1)
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
 newin(){
  // window.location = `${this.state.link1}`
 }
  render() {
    return (
      <div>
        <nav className="site-navigation">
          <div className="hamburger-menu d-lg-none">
            <span />
            <span />
            <span />
            <span />
          </div>
          {/* .hamburger-menu */}
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/aboutus">About us</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/News">News</a>
            </li>
            <li>
              <a href="/contacts">Contact</a>
            </li>
            <li>
              <a href={this.state.link1} onChange={this.handleChange}>
                {this.state.tag1}
              </a>
            </li>
            <li>
              <a href={this.state.link2}>{this.state.username}</a>
            </li>
            <li>
              <a href={this.state.cart}>{this.state.carttag}</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default navbar;
