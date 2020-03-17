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
      submitted
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
      .get(`http://localhost:3000/user/event/${this.state.eventname}`)
      .then(response => {
        console.log(response.data.user.userfound    );
        //  console.log(JSON.stringify(response.body, undefined, 2));
        this.setState({
       
          submitted: true
        });
     
      })
      .catch(err => {
        console.log(err);
        console.error(err);
      });
  };

  render() {
    if (this.submitted) {
      return (
        <div>
          <p>basjbasjb</p>
        </div>
      );
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
                  <h4> Read Event</h4>
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
                    Search
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
