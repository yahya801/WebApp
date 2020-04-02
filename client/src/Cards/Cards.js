import React, { Component } from "react";
import Card from "./NewCard";
import axios from "axios";

import img1 from "../assets/conference.jpg";
import img2 from "../assets/dj-party.jpg";
import img3 from "../assets/concert.jpg";
import CardImg from "react-bootstrap/CardImg";

export class Cards extends Component {
  constructor(props) {
    super(props);
    let loading = true;
    this.state = {
      loading,
      Event: []
    };
  }
  async componentDidMount() {
    axios.get(`http://localhost:3000/event/`).then(res => {
      //    const event = res.data[0];
      //  this.setState({ event});
      this.setState({ Event: res.data.events, loading: false });
      console.log(Event);
    });
  }

  render() {
    return (
      <div>
        {this.state.Event.map(Event => (
          <div Key={Event.id}>
            <div className="container-fluid d-flex justify-content-">
              <div className="row">
                <div className="column">
                  <Card imgsrc={img1} title={Event.eventname} description={Event.description} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;
