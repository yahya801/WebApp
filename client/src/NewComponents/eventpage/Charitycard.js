import React, { Component } from "react";
import Eventpage from "./eventspage";
import axios from "axios";
import Pagination from "./Pagination";

export class eventcard extends Component {
  constructor(props) {
    super(props);
    let loading = true; 
    let count;
    let paginate;
    this.state = {
      loading,
      Event: [],
      count,
      paginate,
    };
  }
  async componentDidMount() {
  await axios.get(`http://localhost:3000/event/countofevent?category=Charity`)
    .then((res)=>{
      this.setState({count: res.data.count})
      console.log(res.data.count)
    })
 
    axios.get(`http://localhost:3000/event/categorysearch?category=Charity&page=2&limit=1`).then((res) => {
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
    let count = this.setState;
    let paginate = this.setState;
    return (
      <div>
          <div style={{ paddingLeft: "100px" ,paddingTop: "24px" }}>
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
                  <Pagination 
                  
                  postsPerPage={1}
                  totalPosts={count}
                  paginate={paginate}
                  
                  />
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
