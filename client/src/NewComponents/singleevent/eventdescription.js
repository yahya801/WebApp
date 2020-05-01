import React, { Component } from "react";
import img1 from "../../images/summer.jpg";


export class eventdescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventname: this.props.eventname || "",
      date: this.props.date || "",
      location: this.props.loc || "",
      category: this.props.category || "",
      description: this.props.description || "",
      price: this.props.price || "",
      time: this.props.time || "",

      edit: this.props.edit || false,
      selectedFile: null,
    };
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12 single-event">
            <div className="event-content-wrap">
              <header className="entry-header flex flex-wrap justify-content-between align-items-end">
                <div className="single-event-heading">
                  <h2 className="entry-title">{this.state.eventname}</h2>
                  <div className="event-location">
                    <a href="#">{this.state.location}</a>
                  </div>
                  <div className="event-date">
                    {this.state.date} @ {this.state.time}
                  </div>
                </div>
                <div
                  style={{ paddingRight: "50px" }}
                  className="buy-tickets flex justify-content-center align-items-center"
                >
                  <a className="btn gradient-bg" href="#">
                    Buy Tikets
                  </a>
                </div>
              </header>
              <br />
              <figure className="events-thumbnail">
                <img src={img1} alt />
              </figure>
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}

export default eventdescription;
