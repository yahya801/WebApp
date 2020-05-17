import React, { Component } from "react";
import Eventdescription from "./eventdescription";
import EventHeader from "./singleeventheader";
import "./style.css";
import axios from "axios";
import Pallete from './pallete'
import Tab from './tabs'


export class container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventname: this.props.eventname || "",
      date: this.props.date || "",
      location: this.props.loc || "",
      category: this.props.category || "",
      description: this.props.description || "",
      price: this.props.price || "",
      time: this.props.time || "",
      eventid: this.props.match.params.ID,
      loading: "",
    };
  }
  async componentDidMount() {
    console.log(this.state.eventid);
    axios
      .get(`http://localhost:3000/event/singleevent/${this.state.eventid}`)
      .then((res) => {
        //    const event = res.data[0];
        //  this.setState({ event});
        this.setState({
          eventname: res.data.event.eventname,
          date: res.data.event.date,
          location: res.data.event.location,
          category: res.data.event.category,
          description: res.data.event.description,
          price: res.data.event.price,
          time: res.data.event.time,
          loading: true,
        });
        // console.log(this.state.Event.eventname);
      });
  }
  render() {
    if (!this.state.loading) return null;
    return (
      <div>
        {/* eventname={Event.eventname}
                  location={Event.location}
                  date={Event.date}
                  price={Event.price} */}
        <EventHeader eventname={this.state.eventname} />
        <div style={{ paddingLeft: "100px" }}>
          <Eventdescription 
            eventname={this.state.eventname}
            date={this.state.date}
            location={this.state.location}
            category={this.state.category}
            description={this.state.description}
            price={this.state.price}
            time={this.state.time}
          />
       
        </div>
        <Tab  eventname={this.state.eventname} />
        {/* <Pallete/> */}
      </div>
    );
  }
}

export default container;
