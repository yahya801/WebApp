import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Moment from "moment";
export class edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Event: [],
      eventname: "",
      date: "",
      location: "",
      city:  "",
      category:  "",
      description:  "",
      basicentry:  "",
      vipentry:  "",
      time: "",
     
    };
    // this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
 
  }
  async componentWillMount() {
    this.getEventDetails();
  }
  updateInputValue(e) {
    
    // const { target: {value} } = e;
    // this.setState({ [e.target]: value });
    this.setState({ [e.target.id]: e.target.value });
  };
  handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    console.log(value)
    this.setState({
      id: value
    })
  }
  getEventDetails() {
    let eventid = this.props.match.params.Id;
    console.log(eventid)
    axios
      .get(`http://localhost:3000/event/edit/${eventid}`)
      .then((res) => {
        console.log(res.data.event);
        this.setState({ Event: res.data.event });
        this.setState({ eventname: this.state.Event.eventname });
        console.log(this.state.eventname);
      })
      .catch((err) => {
        console.log(err);
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <div style={{ paddingLeft: "100px" }} className="container">
          <form
            noValidate
            onSubmit={this.onSubmit}
            className="form-horizontal"
            role="form"
          >
            <h2>Edit Event.</h2>

            <div className="form-group">
              <label htmlFor="eventname" className="col-sm-3 control-label">
                Event Name
              </label>
              <div className="col-sm-9">
                <input
                  id="eventname "
                  type="text"
                  value={this.state.Event.eventname}
                  onChange={this.handleChange}
                  placeholder="Event Name"
                  className="form-control"
                  //   autofocus
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="Date" className="col-sm-3 control-label">
                Date*{" "}
              </label>
              <div className="col-sm-9">
                <input
                  id="date"
                  type="text"
                  value={Moment(this.state.Event.date).format("LL")}
                  onChange={this.updateInputValue}
                  //   error={errors.email}

                  //   placeholder="Email"
                  className="form-control"
                  //   name="email"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Time" className="col-sm-3 control-label">
                Time*{" "}
              </label>
              <div className="col-sm-9">
                <input
                  id="time"
                  type="text"
                  value={this.state.Event.time}
                  onChange={this.updateInputValue}
                  //   error={errors.email}

                  // placeholder="Email"
                  className="form-control"
                  //   name="email"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Location" className="col-sm-3 control-label">
                Location*
              </label>
              <div className="col-sm-9">
                <input
                  id="location"
                  type="text"
                  value={this.state.Event.location}
                  onChange={this.updateInputValue}
                  //   error={errors.password}

                  placeholder="Location"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="category" className="col-sm-3 control-label">
                Category*
              </label>
              <div className="col-sm-9">
                <input
                  id="category"
                  type="text"
                  value={this.state.Event.category}
                  onChange={this.updateInputValue}
                  placeholder="Category"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description" className="col-sm-3 control-label">
                Description*
              </label>
              <div className="col-sm-9">
                <input
                  id="description"
                  type="text"
                  value={this.state.Event.description}
                  onChange={this.updateInputValue}
                  id="description"
                  type="text"
                  placeholder="Description"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Basic" className="col-sm-3 control-label">
                Basic Entry*
              </label>
              <div className="col-sm-9">
                <input
                  id="basicentry"
                  type="number"
                  value={this.state.Event.basicentry}
                  onChange={this.updateInputValue}
                  placeholder="Basic Entry Price"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Vip" className="col-sm-3 control-label">
                Vip Entry*
              </label>
              <div className="col-sm-9">
                <input
                  id="vipentry"
                  type="number"
                  value={this.state.Event.vipentry}
                  onChange={this.updateInputValue}
                  placeholder="Vip Entry Price"
                  className="form-control"
                />
              </div>
            </div>

            <div>
              <label htmlFor="Upload Image" className="col-sm-3 control-label">
                Upload Image*
              </label>
              <br />
              <div style={{ paddingLeft: "15px" }}>
                <input type="file" onChange={this.fileSelectedHandler} />
              </div>
            </div>
            <div>{this.state.errmissing}</div>

            <div className="form-group">
              <div className="col-sm-9 col-sm-offset-3">
                <span className="help-block">*Required fields</span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
          {/* /form */}
        </div>
        ;{/* ./container */}
      </div>
    );
  }
}

export default edit;
