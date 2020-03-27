import React, { Component } from 'react';
import './card-style.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img1 from "../assets/conference.jpg";
import img2 from "../assets/dj-party.jpg";
import img3 from "../assets/concert.jpg";



export class NewCard extends Component {
  render() {
    return(
      <Card text = "center" style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {this.props.imgsrc} />
  <Card.Body>
    <Card.Title> {this.props.title} </Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    );
  }
}

export default NewCard






