import React, { Component } from "react";
import './navbar.css'

export class navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: localStorage.getItem("user"),
      tag: ""
    };
  }
  componentWillMount(){
    if (this.state.username == "") {
     this.state.tag = "Logout"
    } else {
      this.state.tag = "Login/Register"
    }
  }
  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
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
              <a href="/login" onChange={this.handleChange}>{this.state.tag}</a>
            </li>
            <li>
              <a href="/">{this.state.username}</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
} 

export default navbar;
