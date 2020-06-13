import React, { Component } from "react";
import Eventpage from "./eventspage";
import axios from "axios";
import Pagination from './Pagination';

export class eventcard extends Component {
  constructor(props) {
    super(props);
    let loading = true;
    this.state = {
      loading,
      Event: [],
      showPerPage: 1,
      pagination: { start: 0, end:1 }
    };
  }
  onPaginationChange = (start, end) => {
    console.log(start, end);
    // setPagination({ start: start, end: end });
    this.setState({
      pagination: { start: start, end: end }
    })

  };
  async componentDidMount() {
    axios.get(`http://localhost:3000/event/categorysearch?category=Corperate`).then((res) => {
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
    return (
      <div>
          <div style={{ paddingLeft: "100px" }}>
          <div className="container-fuid">
            <div class="row events-list">
              {this.state.Event.slice(this.state.pagination.start, this.state.pagination.end).map((Event) => (
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
          <Pagination
            showPerPage={this.state.showPerPage}
            onPaginationChange={this.onPaginationChange}
            total={this.state.Event.length}
            />
        </div>
      </div>
    );
  }
}

export default eventcard;
