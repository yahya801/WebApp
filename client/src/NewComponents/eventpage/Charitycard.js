import React, { Component, useState } from "react";
import Eventpage from "./eventspage";
import axios from "axios";
import Pagination from "./Pagination";

export class eventcard extends Component {
  constructor(props) {
    super(props);
    let loading = true;

    this.state = {
      loading,
      Event: [],
      showPerPage: 5,
      pagination: { start: 0, end: 5}

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
    await axios.get(`http://localhost:3000/event/countofevent?category=Charity`)
      .then((res) => {

        this.state.count = res.data.count;
        console.log(res.data.count)
      })

    axios.get(`http://localhost:3000/event/categorysearch?category=Charity`).then((res) => {
      //    const event = res.data[0];
      //  this.setState({ event});
      this.setState({ Event: res.data.events, loading: false });
      console.log(Event)
      // console.log(this.state.Event);
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

    // const [showPerPage, setshowPerPage] = useState(4);

    // const [pagination, setPagination] = useState({
    //   start: 0,
    //   end: showPerPage
    // });

    // const onPaginationChange = (start, end) => {
    //   console.log(start, end);
    //   // setPagination({ start: start, end: end });
    //   this.setState({
    //     pagination:{start: start,end: end}
    //   })

    // };









    //let paginate = (pageNumber) => ({currentPage: this.setState(pageNumber)});


    return (
      <div>
        <div style={{ paddingLeft: "100px", paddingTop: "24px" }}>

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
