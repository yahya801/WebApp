import React, { Component } from "react";
import Eventdescription from "./eventdescription";
import EventHeader from "./singleeventheader";
import "./style.css";
import axios from "axios";
// import Pallete from './pallete'
import Tab from "./tabs";
import Tickets from "./tickets";

export class container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventname: this.props.eventname || "",
      date: this.props.date || "",
      location: this.props.loc || "",
      category: this.props.category || "",
      description: this.props.description || "",
      basicentry: this.props.basicentry || "",
      vipentry: this.props.vipentry || "",
      time: this.props.time || "",
      eventid: this.props.match.params.ID,
      loading: "",
      userid: localStorage.getItem("id") || "",
      userrole: "",
      organizername: this.props.organizername || "",
      companyname: this.props.companyname || "",

    };
  }
  async componentDidMount() {
    console.log(this.state.eventid);
    axios
      .get(`http://localhost:3000/event/singleevent/${this.state.eventid}`, {
        params: { userid: this.state.userid },
      })
      .then((res) => {
        console.log(res.data);
        //    const event = res.data[0];
        //  this.setState({ event});
        this.setState({
          eventname: res.data.event.eventname,
          date: res.data.event.date,
          location: res.data.event.location,
          category: res.data.event.category,
          description: res.data.event.description,
          basicentry: res.data.event.basicentry,
          vipentry: res.data.event.vipentry,
          time: res.data.event.time,
          loading: true,
          organizername: res.data.event.organizername,
          companyname: res.data.event.companyname,

        });
        if(res.data.userdata){
          this.setState({
            userrole: res.data.userdata[0].role
          })
          console.log('hgh')}
          
          else{
            this.setState({
              userrole: ""
            })
          }
        
        console.log(this.state.userrole);
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
            basicentry={this.state.basicentry}
            vipentry={this.state.vipentry}
            time={this.state.time}
            organizername = {this.state.organizername}
            companyname = {this.state.companyname}
          />
        </div>
        <Tab eventname={this.state.eventname}
        date = {this.state.date}
        description = {this.state.description}
        location = {this.state.location}
        organizername = {this.state.organizername}
        companyname = {this.state.companyname}
         />
        {/* <Pallete/> */}

        <Tickets
          basicentry={this.state.basicentry}
          vipentry={this.state.vipentry}
          userrole={this.state.userrole}
          eventid={this.state.eventid}
        />
      </div>
    );
  }
}

export default container;
