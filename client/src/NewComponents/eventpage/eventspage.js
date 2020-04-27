import React, { Component } from "react";
import img1 from "../../images/event-1.jpg";

import location from "../../images/location-icon.png";

export class eventspage extends Component {
  constructor(props) {
    super(props);
    //let loading = true;
    this.state = {
      	
     
    };
  }
  render() {
    return (
      <div>
        <div class="col-sm">
          <figure className="events-thumbnail">
            <a href="#">
              <img src={img1} alt />
            </a>
          </figure>
          <div className="event-content-wrap">
            <header className="entry-header flex justify-content-between">
              <div>
                <h2 className="entry-title">
                  <a href="#">{this.props.eventname}</a>
                </h2>
                <div className="event-location">
                  <a href="#">{this.props.location}</a>
                </div>
                <div className="event-date">{this.props.date}</div>
              </div>
              <div className="event-cost flex justify-content-center align-items-center">
                from{" Rs  "}
                <b>
                  <span>{this.props.price}</span>
                </b>
              </div>
            </header>
            <footer className="entry-footer">
              <a href="#">Buy Tickets</a>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default eventspage;
