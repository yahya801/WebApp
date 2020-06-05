import Card from "react-bootstrap/Card";
import './cardstyle.css';

import React, { Component } from 'react'

export default class BookingCard extends Component {
    render() {
        return (
            <div>
                <Card text="center" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> Event: {this.props.title} </Card.Title>
        <Card.Text>
            Booking Date: {this.props.bookingdate}
            <br/>
            Normal Tickets: {this.props.normalticket}
            <br/>
            VIP Tickets: {this.props.vipticket}
            <br/>
            Total Amount: {this.props.price}
            <br/>

        </Card.Text>
        </Card.Body>
      </Card>
            </div>
        )
    }
}




