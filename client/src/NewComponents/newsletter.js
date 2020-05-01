import React, { Component } from "react";
import img1 from "../images/newsletter-bg.jpg";

export class newsletter extends Component {
  render() {
    return (
      <div>
        <div
          className="newsletter-subscribe"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <header className="entry-header">
                  <h2 className="entry-title">
                    Subscribe to our newsletter to get the latest trends &amp;
                    news
                  </h2>
                  <p>Join our database NOW!</p>
                </header>
                <div className="newsletter-form">
                  <form className="flex flex-wrap justify-content-center align-items-center">
                    <div className="col-md-12 col-lg-3">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <input type="email" placeholder="Your e-mail" />
                    </div>
                    <div className="col-md-12 col-lg-3">
                      <input
                        className="btn gradient-bg"
                        type="submit"
                        defaultValue="Subscribe"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default newsletter;
