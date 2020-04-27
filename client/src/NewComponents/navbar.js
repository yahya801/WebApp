import React, { Component } from "react";

export class navbar extends Component {
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
                <a href="/login">Login/Siginup</a>
              </li>
            </ul>
          </nav>
        </div>
       
    );
  }
}

export default navbar;
