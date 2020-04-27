import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { Container, Button, Alert } from "react-bootstrap";
import Create from "./create";

import Moment from 'moment'

export class eventlist extends Component {
  constructor(props) {
    super(props);
    let addevent = false;
    let editevent = false;

    this.state = {
      error: null,
      Event: [],
      addevent,
      editevent,
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
    axios.get(`http://localhost:3000/event/`).then((res) => {
      //    const event = res.data[0];
      //  this.setState({ event});
      this.setState({ Event: res.data.events });
      console.log(Event);
    });
  }
  onClick() {
    window.location("/create-event");
  }

  editevent = (eventname) => {
    //console.log(eventname);
    this.setState({ editevent: true });
    console.log(this.state.editevent);
    if (this.state.editevent) {
    }
  };

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
                <th>Location</th>
                <th>Description</th>
                <th>Category</th>
                <th>Date</th>
                <th>Price</th>
              </tr>
            </thead>

            {this.state.Event.map((Event) => (
              <tr Key={Event._id}>
                <td>{Event.eventname}</td>
                <td>{Event.location}</td>
                <td>{Event.description}</td>
                <td>{Event.category}</td>
                <td>{Moment(Event.date).format("LL")}</td>
                <td>{Event.price}</td>
                <td>
                  <Link
                    variant="info"
                    className="btn"
                    to={`/edit-event/${Event._id}`}
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

export default eventlist;
