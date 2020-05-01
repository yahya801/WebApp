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
    axios.get(`http://localhost:3000/event/`).then((res) => {
      //    const event = res.data[0];
      //  this.setState({ event});
      this.setState({ Event: res.data.events, loading: false });
      console.log(Event);
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div class="row events-list">
            {this.state.Event.map((Event) => (
              <div Key={Event._id}>
                <Eventpage
                  event_id={Event._id}
                  eventname={Event.eventname}
                  location={Event.location}
                  date={Event.date}
                  price={Event.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default eventcard;
