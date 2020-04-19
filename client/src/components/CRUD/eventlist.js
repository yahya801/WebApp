import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { Container, Button, Alert } from "react-bootstrap";
import history from './../history';

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
  onClick() {
    window.location('/create-event')  
    }
  

  editevent = eventname =>{
    console.log(eventname);
  }

  deleteevent = _id => {
    console.log(_id)
    axios
    .delete(`http://localhost:3000/event/delete/${_id}`)
    .then(() => {
      console.log('lknckjn')
     
      console.log('Deleted Successfully')
    })
  }
  onClick(){
    history.push('/create-event')
  }

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
                <th>Price</th>
              </tr>
            </thead>

            {this.state.Event.map((Event) => (
              <tr Key={Event._id}>
                <td>{Event.eventname}</td>
                <td>{Event.location}</td>
                <td>{Event.description}</td>
                <td>{Event.category}</td>
                <td>{Event.price}</td>
                <td>
                  <Button variant="info" onClick={() => this.editevent(Event.eventname)}>Edit</Button>
                  <Button variant="danger" onClick={() => this.deleteevent(Event._id)}>Delete</Button>
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
