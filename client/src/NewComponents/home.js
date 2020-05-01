import React, { Component } from "react";
import img2 from"../images/header-bg.jpg"

export class home extends Component {
  render() {
    return (
      <div>
        <div className="swiper-container hero-slider">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide"
              data-date="2018/05/01"
              style={{ backgroundImage: `url(${img2})` }}
            >
              <div className="hero-content">
                <div className="container">
                  <div className="row">
                    <div className="col flex flex-column justify-content-center">
                      <div className="entry-header">
                        <div className="countdown flex align-items-center">
                          <div className="countdown-holder flex align-items-baseline">
                            <span className="dday" />
                           
                          </div>
                          {/* .countdown-holder */}
                          <div className="countdown-holder flex align-items-baseline">
                            <span className="dhour" />
                           
                          </div>
                          {/* .countdown-holder */}
                          <div className="countdown-holder flex align-items-baseline">
                            <span className="dmin" />
                            
                          </div>
                          {/* .countdown-holder */}
                          <div className="countdown-holder flex align-items-baseline">
                            <span className="dsec" />
                            
                          </div>
                          {/* .countdown-holder */}
                        </div>
                        {/* .countdown */}
                        <h2 className="entry-title">
                          We have the best events. <br />
                          Get your Tickets now!
                        </h2>
                      </div>
                      {/*- .entry-header */}
                      <div className="entry-footer">
                        <a className="btn gradient-bg" href="/buy-tickets">
                          Order here
                        </a>
                      </div>
                      {/* .entry-footer" */}
                    </div>
                    {/* .col */}
                  </div>
                  {/* .container */}
                </div>
                {/* .hero-content */}
              </div>
              {/* .swiper-slide */}
            </div>
            {/* .swiper-wrapper */}
          </div>
        </div>
      </div>
    );
  }
}

export default home;
