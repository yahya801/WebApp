import React, { Component } from "react";
import Link from 'react-dom'
import "./navbar.css";

export class navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "" || localStorage.getItem("user") ,
      tag1: "",
      link1: "",
    };
  }
  componentWillMount() {
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
              <a >{this.state.username}</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default navbar;
