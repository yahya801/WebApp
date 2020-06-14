import Card from "react-bootstrap/Card";
import './cardstyle.css';
import moment from 'moment'

import React, { Component } from 'react'

export default class BookingCard extends Component {
    render() {
        return (
            <div>
                <Card text="center" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> Event: {this.props.title.toUpperCase()} </Card.Title>
        <Card.Text>
            Booking Date: {moment(this.props.bookingdate).format("LL")}
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




