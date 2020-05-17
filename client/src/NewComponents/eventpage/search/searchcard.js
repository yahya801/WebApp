import React, { Component } from "react";
import axios from "axios";
import Eventpage from "../eventspage";
import Spinner from '../../spinner'

export class searchcard extends Component {
  constructor(props) {
    super(props);
    var url_string = window.location.href;
    var url = new URL(url_string);
    let loading = true;
    this.state = {
      loading,
      Event: [],
      date: "" || url.searchParams.get("date"),
      eventname: "" || url.searchParams.get("eventname"),
      location: "" || url.searchParams.get("location"),
    };
  }
  async componentDidMount() {
    axios
      .get(
        `http://localhost:3000/event/search?eventname=${this.state.eventname}&date=${this.state.date}&location=${this.setState.location}`
      )
      .then((res) => {
        //    const event = res.data[0];
        //  this.setState({ event});
        this.setState({ Event: res.data.events, loading: false });
        console.log(Event);
      });
  }
  handleClick() {
    window.location = `/single_event/${this.state.event_id}`;
  }
  singleevent = (_id) => {
    const index = this.state.Event.map(function (Event) {
      return Event._id;
    });

    window.location = `singleevent/${_id}`;
    console.log(index);
  };
  render() {
    const loading = this.state.loading;
    const event = this.state.Event
    let spinner;
    if(event === null || loading) {
        spinner = <Spinner />;
      }
      const SPINNER = (
        <div>
          {spinner}
        </div>
      );
    return (
      <div>
        {/* <div class="spinner-border m-5" role="status">
          <span class="sr-only">Loading...</span>
        </div> */}
        <div style={{ paddingLeft: "100px" }}>
          <div className="container-fuid">
            <div class="row events-list">
              {this.state.Event.map((Event) => (
                <div
                  Key={Event._id}
                  onClick={() => this.singleevent(Event._id)}
                >
                  <div class="col-sm">
                    <Eventpage
                      eventid={Event._id}
                      eventname={Event.eventname}
                      location={Event.location}
                      date={Event.date}
                      price={Event.price}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {loading ? SPINNER : null}
        </div>
      </div>
    );
  }
}

export default searchcard;
