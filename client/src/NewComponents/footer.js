import React, { Component } from "react";
import img1 from "../images/logo.png"

export class footer extends Component {
  render() {
    return (
      <div>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <figure className="footer-logo">
                  <a href="#">
                    <img src={img1} alt="logo" />
                  </a>
                </figure>
                <nav className="footer-navigation">
                  <ul className="flex flex-wrap justify-content-center align-items-center">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Events</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
                
               
                <div className="footer-social">
                  <ul className="flex flex-wrap justify-content-center align-items-center">
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        ;
      </div>
    );
  }
}

export default footer;
