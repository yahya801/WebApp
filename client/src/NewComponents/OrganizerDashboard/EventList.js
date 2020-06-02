import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { Container, Button, Alert } from "react-bootstrap";
import Create from "./Create";

import Moment from 'moment'

export class EventList extends Component {
  constructor(props) {
    super(props);
    let addevent = false;
    let editevent = false;

    this.state = {
      error: null,
      Event: [],
      addevent,
      editevent,
      userid: localStorage.getItem("id")
      // date: Date(this.props.date),
      // formattedDate: Moment(date).format("LL"),
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  getComponent() {
    if ((this.state.editevent = false)) {
      console.log("hxhxb");
      return <Create />;
    }
  }
  async componentDidMount() {
    console.log(this.state.userid)
    // const id = this.state.userid
    axios.get("http://localhost:3000/event/", {
      params: {
       userid: this.state.userid
      }
    }).then((res) => {
      //    const event = res.data[0];
      //  this.setState({ event});
      this.setState({ Event: res.data.events });
      console.log(Event);
    });
  }
  onClick() {
    window.location("/create-event");
  }

  editevent = (_id) => {
    var index = this.state.Event.map(function (Event) {
      return Event._id;
    }).indexOf(_id)
    console.log(index)
    let neweventlist = [];
    neweventlist = this.state.Event;
    console.log(neweventlist[index]._id)

    window.location = (`/editevent/${_id}`)
    // console.log(index)
    }
  ;

  deleteevent = (_id) => {
    console.log(_id);

    var removeindex = this.state.Event.map(function (Event) {
      return Event._id;
    }).indexOf(_id);
    console.log(removeindex);
    let neweventlist = [];
    neweventlist = this.state.Event;
    neweventlist.splice(removeindex, 1);
    this.setState({ Event: neweventlist });

    axios.delete(`http://localhost:3000/event/delete/${_id}`).then(() => {
      console.log("Deleted Successfully");
    });
  };
  onClick() {}

  render() {
    if(!localStorage.getItem("user")== ""){
      console.log("ahajcb")
      }
      else{
       return  <Redirect to="/" />
      }
    return (
      <div>
        <br />
        <Container>
          {/* <Button variant="btn btn-success" onClick={() => this.onClick()}>
            Add Event
          </Button> */}
          <h2>Event List</h2>
          <Table>
            <thead>
              <tr>
                <th>EventName</th>
                
                <th>Description</th>
                <th>Category</th>
                <th>Location</th>
                <th>City</th>
                <th>Date</th>
                <th>Time</th>
                <th>Basic Entry < br/> Price</th>
                <th>Vip Entry < br/> Price</th>
              </tr>
            </thead>

            {this.state.Event.map((Event) => (
              <tr Key={Event._id}>
                <td>{Event.eventname.toUpperCase()}</td>
               
                <td>{Event.description}</td>
                <td>{Event.category}</td>
                <td>{Event.location.toUpperCase()}</td>
                <td>{Event.city.toUpperCase()}</td>
                <td>{Moment(Event.date).format("LL")}</td>
                <td>{Event.time}</td>
                <td>{Event.basicentry}</td>
                <td>{Event.vipentry}</td>
                <td>
                  <Link
                    variant="info"
                    className="btn"
                    // to={`/edit-event/${Event._id}`}
                    onClick={() => this.editevent(Event._id)}
                  >
                    Edit
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => this.deleteevent(Event._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </Table>
        </Container>
      </div>
    );
  }
}

export default EventList;
