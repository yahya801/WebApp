import React, { Component } from "react";
import img1 from "../images/logo-2.png";

export class info extends Component {
  render() {
    return (
      <div>
        <div className="homepage-info-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-5">
                <figure>
                  <img src={img1} alt="logo" />
                </figure>
              </div>
              <div className="col-12 col-md-8 col-lg-7">
                <header className="entry-header">
                  <h2 className="entry-title">
                    What is Agenda and why choose our services?
                  </h2>
                </header>
                <div className="entry-content">
                  <p>
                    Vestibulum eget lacus at mauris sagittis varius. Etiam ut
                    venenatis dui. Nullam tellus risus, pellentesque at
                    facilisis et, scelerisque sit amet metus. Duis vel semper
                    turpis, ac tempus libero. Maecenas id ultrices risus. Aenean
                    nec ornare ipsum, lacinia volutpat urna. Maecenas ut aliquam
                    purus, quis sodales dolor.
                  </p>
                </div>
                <footer className="entry-footer">
                  <a href="#" className="btn gradient-bg">
                    Read More
                  </a>
                  <a href="#" className="btn dark">
                    Register Now
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default info;
