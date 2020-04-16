import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { Container, Button, Alert } from "react-bootstrap";

export class eventlist extends Component {
  constructor(props) {
    super(props);
    let addevent = false;

    this.state = {
      error: null,
      Event: [],
      addevent,
    };
  }
  async componentDidMount() {
    axios.get(`http://localhost:3000/event/`).then((res) => {
      //    const event = res.data[0];
      //  this.setState({ event});
      this.setState({ Event: res.data.events });
      console.log(Event);
    });
  }
  onSubmit = (e) => {
    this.setState({ addevent: true });
    console.log(this.state.addevent);
  };

  render() {
    if (this.addevent) {
      console.log("hqdkq");
      return <Redirect to="/create-event" />;
    }
    return (
      <div>
        <br />
        <Container>
          <Button variant="primary" onClick={() => this.onSubmit()}>
            Add Event
          </Button>
          <h2>Event List</h2>
          <Table>
            <thead>
              <tr>
                <th>EventName</th>
                <th>Location</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>

            {this.state.Event.map((Event) => (
              <tr Key={Event.id}>
                <td>{Event.eventname}</td>
                <td>{Event.location}</td>
                <td>{Event.description}</td>
                <td>{Event.category}</td>
                <td>{Event.price}</td>
                <td>
                  <Button variant="info" onClick={() => this.props.editevent(Event.eventname)}>Edit</Button>
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
