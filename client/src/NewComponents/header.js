import React, { Component } from "react";
import img1 from "../images/logo.png";
import img2 from"../images/header-bg.jpg"
import Navbar from './navbar'
import Home from './home'

export class header extends Component {
  render() {
    return (
      <div>
        <header className="site-header">
          <div className="header-bar">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-10 col-lg-2 order-lg-1">
                  <div className="site-branding">
                    <div className="site-title">
                      <a href="/">
                        <img src={img1} alt="logo" />
                      </a>
                    </div>
                    {/* .site-title */}
                  </div>
                  {/* .site-branding */}
                </div>
                {/* .col */}
                <div className="col-2 col-lg-7 order-3 order-lg-2">
                 <Navbar />
                  {/* .site-navigation */}
                </div>
                {/* .col */}
                <div className="col-lg-3 d-none d-lg-block order-2 order-lg-3">
                  <div className="buy-tickets">
                    <a className="btn gradient-bg" href="/buy-tickets">
                      Buy Tickets
                    </a>
                  </div>
                  {/* .buy-tickets */}
                </div>
                {/* .col */}
              </div>
              {/* .row */}
            </div>
            {/* .container-fluid */}
          </div>
          {/* .header-bar */}
          
          
        </header>
        
      </div>
    );
  }
}

export default header;
