import Card from "react-bootstrap/Card";
import './cardstyle.css';

import React, { Component } from 'react'

export default class BookingCard extends Component {
    render() {
        return (
            <div>
                <Card text="center" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> Event Booked </Card.Title>
          <Card.Text>Booked Event Details</Card.Text>
        </Card.Body>
      </Card>
            </div>
        )
    }
}




