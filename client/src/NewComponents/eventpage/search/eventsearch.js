import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class eventsearch extends Component {
  constructor(props) {
    super(props);
    // let loading = true;
    var  url_string = window.location.href;
    var url = new URL(url_string);

    this.state = {
      date: url.searchParams.get("date") || "" ,
      eventname: url.searchParams.get("eventname") || "",
      city: url.searchParams.get("city") || "" ,
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  
  onSubmit = (e) => {
    e.preventDefault();
    window.location = `/search?eventname=${this.state.eventname}&date=${this.state.date}&city=${this.state.city}`
    // const eventData = {
    //   eventname: this.state.eventname,
    //   date: this.state.date,
    //   location: this.state.location,

    // };
    // console.log(this.state.location);
  };
  render() {
    return (
      <div>
        <form className="events-search">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3">
                <input
                  type="date"
                  id="date"
                  onChange={this.onChange}
                  value={this.state.date}
                  placeholder="Date"
                />
              </div>
              <div className="col-12 col-md-3">
                <input
                  type="text"
                  id="eventname"
                  onChange={this.onChange}
                  value={this.state.eventname}
                  placeholder="Event"
                />
              </div>
              <div className="col-12 col-md-3">
                <input
                  type="text"
                  id="city"
                  onChange={this.onChange}
                  value={this.state.city}
                  placeholder="City"
                />
              </div>
              <div className="col-12 col-md-3">
                {/* <Link
                  to={`/search?eventname=${this.state.eventname}&date=${this.state.date}&location=${this.state.location}`}
                > */}
                  <input
                    onClick={this.onSubmit}
                    className="btn gradient-bg"
                    type="submit"
                    defaultValue="Search Events"
                  />
                {/* </Link> */}
              </div>
            </div>
          </div>
        </form>
        ;
      </div>
    );
  }
}

export default eventsearch;
