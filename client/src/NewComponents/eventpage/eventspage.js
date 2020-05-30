import React, { Component } from "react";
import img1 from "../../images/event-1.jpg";
import Moment from "moment";
import { IconContext } from "react-icons";
import { GoLocation } from "react-icons/go";
import { MdDateRange } from "react-icons/md";
import { Link, Redirect } from "react-router-dom";

import location from "../../images/location-icon.png";

export class eventspage extends Component {
  constructor(props) {
    super(props);
    //let loading = true;
    this.state = {
      event_id: this.props.eventid,
    };
  }
  // window.location = (`/edit-event/${_id}`)
  handleClick() {
    //  window.location = (`/single_event/${this.state.event_id}`)
  }

  render() {
    return (
      <div>
        <figure className="events-thumbnail">
          <a>
            <img src={img1} alt onClick={() => this.handleClick()} />
          </a>
        </figure>
        <div className="event-content-wrap">
          <header className="entry-header flex justify-content-between">
            <div>
              <h2 className="entry-title">
                <a onClick={() => this.handleClick()}>{this.props.eventname.toUpperCase()}</a>
              </h2>
              <div className="event-location">
                <IconContext.Provider
                  value={{
                    color: "purple",
                    size: "2em",
                    className: "global-class-name",
                  }}
                >
                  <GoLocation />
                </IconContext.Provider>
                <a onClick={() => this.handleClick()}>{this.props.location.toUpperCase()}</a>
              </div>
              <div className="event-date" onClick={() => this.handleClick()}>
                <IconContext.Provider
                  value={{
                    color: "purple",
                    size: "2em",
                    className: "global-class-name",
                  }}
                >
                  <MdDateRange />
                </IconContext.Provider>
                {Moment(this.props.date).format("LL")}
              </div>
            </div>
            <div
              onClick={() => this.handleClick()}
              className="event-cost flex justify-content-center align-items-center"
            >
              from {" Rs  "}
              <b>
                <span>{" "} {this.props.basicentry}</span>
              </b>
            </div>
          </header>
          <footer className="entry-footer">
            <a onClick={() => this.handleClick()}>Buy Tickets</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default eventspage;
