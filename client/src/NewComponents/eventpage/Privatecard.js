import React, { Component } from "react";
import Eventpage from "./eventspage";
import axios from "axios";

export class eventcard extends Component {
  constructor(props) {
    super(props);
    let loading = true;
    this.state = {
      loading,
      Event: [],
    };
  }
  async componentDidMount() {
    await axios.get(`http://localhost:3000/event/countofevent?cxategory=Private`)
    axios.get(`http://localhost:3000/event/categorysearch?category=Private`).then((res) => {
      //    const event = res.data[0];
      //  this.setState({ event});
      // console.log(res.data)
      this.setState({ Event: res.data.events, loading: false });
      // console.log(Event);
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
    return (
      <div>
          <div style={{ paddingLeft: "100px" ,paddingTop: "10px"}}>
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
                      basicentry={Event.basicentry}
                      vipentry={Event.vipentry}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default eventcard;
