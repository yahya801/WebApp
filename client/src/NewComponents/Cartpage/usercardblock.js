import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { Container, Button, Alert } from "react-bootstrap";
import Moment from "moment";

export class UserCardBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: localStorage.getItem("id"),
      Events: [],
      totalamount: 0,
    };
  }
  async componentWillMount() {

    
    axios
      .get(`http://localhost:3000/booking/cart/${this.state.userid}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ Events: response.data.cartevents });
        console.log(this.state.Events);
      });
  }
  //   totalprice(eventprice){
  //     let amount= eventprice
  //     this.setState({
  //         totalamount: this.state.totalamount + amount
  //     })
  //     console.log(this.state.totalamount)
  //   }

  render() {
    let { Events } = this.state;
    let { totalamount } = this.state;
    for (var i = 0; i < Events.length; i++) {
      totalamount = totalamount + Events[i].totalprice;
    }
    console.log(totalamount);
    if (!localStorage.getItem("user") == "") {
      console.log("ahajcb");
    } else {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <br />
        <Container>
          {/* <Button variant="btn btn-success" onClick={() => this.onClick()}>
              Add Event
            </Button> */}
          <h2>Shopping Cart</h2>
          <Table>
            <thead>
              <tr>
                <th>EventName</th>

                <th>Category</th>
                <th>Location</th>
                <th>City</th>
                <th>Booking Date</th>

                <th>
                  Basic Entry <br /> Tickets
                </th>
                <th>
                  Vip Entry <br /> Tickets
                </th>
                <th>Total Price</th>
              </tr>
            </thead>

            {this.state.Events.map((Event) => (
              //   <div onChange={this.totalprice(Event.totalprice)}>
              <tr Key={Event._id}>
                <td>{Event.eventname}</td>

                <td>{Event.category}</td>

                <td>{Event.location.toUpperCase()}</td>
                <td>{Event.city.toUpperCase()}</td>
                <td>{Moment(Event.bookingdate).format("LL")}</td>

                <td>{Event.normalticket}</td>
                <td>{Event.vipticket}</td>
                <td>{Event.totalprice}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => this.deleteevent(Event._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
              //   </div>
            ))}
          </Table>
        </Container>
        <h2>Total Amount: {totalamount}</h2>
        <Button variant="danger">Proceed to Checkout</Button>
      </div>
    );
  }
}

export default UserCardBlock;
