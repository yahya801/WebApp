import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
export class create extends Component {
  constructor(props) {
    super(props);
    let submitted = false;
    this.state = {
      eventname: "",
      date: "",
      location: "",
      category: "",
      description: "",
      price: "",
      submitted,
      
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const eventData = {
      eventname: this.state.eventname,
      date: this.state.date,
      location: this.state.location,
      category: this.state.category,
      description: this.state.description,
      price: this.state.price
    };
    axios
      .post("http://localhost:3000/event/create", eventData)
      .then(() => {
        this.setState({
          submitted: true
        });
      })
      .catch(err => {
        console.log(err);
        console.error(err);
      });
    console.log(eventData);
  };

  render() {
    if (this.submitted) {
      return <Redirect to="/read-events" />;
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s8 offset-s2">
              <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Back
                to home
              </Link>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <p className="black-text text-darken-4">
                  <h4> Create Event</h4>
                </p>
              </div>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                  <input
                    id="eventname"
                    type="text"
                    value={this.state.eventname}
                    onChange={this.onChange}
                  />
                  <label htmlFor="event-name">Event-Name</label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="date"
                    type="Date"
                    value={this.state.date}
                    onChange={this.onChange}
                  />
                  <label htmlFor="date">Date</label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="location"
                    type="text"
                    value={this.state.location}
                    onChange={this.onChange}
                  />
                  <label htmlFor="location">Location</label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="category"
                    type="text"
                    value={this.state.category}
                    onChange={this.onChange}
                  />
                  <label htmlFor="category">Category</label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="description"
                    type="text"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                  <label htmlFor="description">Description</label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="price"
                    type="number"
                    value={this.state.price}
                    onChange={this.onChange}
                  />
                  <label htmlFor="price">Price</label>
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default create;
