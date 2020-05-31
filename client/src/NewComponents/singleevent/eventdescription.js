import React, { Component } from "react";
import img1 from "../../images/summer.jpg";
import img2 from "../../images/location-icon.png"
import Moment from 'moment'
import { IconContext } from "react-icons";
import { GoLocation } from "react-icons/go";
import { MdDateRange } from "react-icons/md";



export class eventdescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventname: this.props.eventname || "",
      date: this.props.date || "",
      location: this.props.location || "",
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
        <div class="container"></div>
        <div className="row">
          <div className="col-12 single-event">
            <div className="event-content-wrap">
              <header className="entry-header flex flex-wrap justify-content-between align-items-end">
                <div className="single-event-heading" style={{paddingLeft:"150px"}}>
                  <h2 className="entry-title">{this.state.eventname.toUpperCase()}</h2>
                  <div>
                     

                  <div className="event-location" >
                  <IconContext.Provider
                  value={{
                    color: "purple",
                    size: "2em",
                    className: "global-class-name",
                  }}
                >
                  <GoLocation />
                </IconContext.Provider>
                    <a >{this.state.location.toUpperCase()}</a>
                  </div>
                  </div>
                  <div className="event-date">
                  <IconContext.Provider
                  value={{
                    color: "purple",
                    size: "2em",
                    className: "global-class-name",
                  }}
                >
                  <MdDateRange />
                </IconContext.Provider>
                    {Moment(this.state.date).format("LL")} @ {this.state.time}
                  </div>
                </div>
                <div
                  style={{ paddingRight: "50px" }}
                  className="buy-tickets flex justify-content-center align-items-center"
                >
                  <a className="btn gradient-bg" href="#">
                    Buy Tickets
                  </a>
                </div>
              </header>
              <br />
              <figure style={{paddingLeft:"150px"}} className="events-thumbnail">
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
