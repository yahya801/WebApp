import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import moment from 'moment'
import AddOrganizerModal from './AddOrganizerModal';

export class CreateEvent extends Component {
  constructor(props) {
    super(props);
    let submitted = false;
    let userloggedin = false;
    this.state = {
      eventname: this.props.eventname || "",
      date: this.props.date || "",
      location: this.props.loc || "",
      city: this.props.city || "",
      category: this.props.category || "",
      description: this.props.description || "",
      basicentry: this.props.basicentry || "",
      vipentry: this.props.vipentry || "",
      time: this.props.time || "",
      submitted,
      userid: "",
      edit: this.props.edit || false,
      selectedFile: null,
      userloggedin,
      addModalShow: false
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {

    console.log(localStorage.getItem("id"));
    e.preventDefault();

    const eventData = {
      eventname: this.state.eventname,
      date: this.state.date,
      location: this.state.location,
      city : this.state.city,
      category: this.state.category,
      description: this.state.description,
      basicentry: this.state.basicentry,
      vipentry: this.state.vipentry,
      time: this.state.time,
      userid: localStorage.getItem("id"),
      //  image: this.state.selectedFile
    };
    // const fd = new FormData();
    // fd.append('image',this.state.selectedFile)
    // console.log(eventData)
    // fd.append('name',eventData)

    // var fd = new FormData()
    // fd.append('files',this.state.selectedFile)
    // var statebody = Object.assign({},eventData)
    // fd.append('state',JSON.stringify(statebody))
    // axios.post('/api/',fd)
    // console.log(fd.state)
    axios
      .post("http://localhost:3000/event/create", eventData)
      .then(() => {
        this.setState({
          submitted: true,
      //    addModalShow: true
        });
      })
      .catch((err) => {
        console.log(err);
        console.error(err);
      });
    console.log(eventData);
    console.log(this.state.addModalShow)
  };
  fileSelectedHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
    console.log(e.target.files[0]);
  };
  
  //notloggedin() {
    //window.location = "/";
  //}

  render() {
    let addModalClose = () => this.setState({addModalShow: false})
    let {addModalShow} = this.state
    let {submitted} = this.state
    let show
    if (submitted == true ){
     addModalShow = true
    }
    if (addModalShow == true){
      show = <AddOrganizerModal />
    }
    const ModalShow = <div>{show}</div>;
    if (!localStorage.getItem("user") == "") {
      console.log("ahajcb");
    } else {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div style={{ paddingLeft: "100px" }} className="container">
          <form
            noValidate
            onSubmit={this.onSubmit}
            className="form-horizontal"
            role="form"
          >

            <div className="form-group">
              <label htmlFor="eventName" className="col-sm-3 control-label">
                Event Name
              </label>
              <div className="col-sm-9">
                <input
                  id="eventname"
                  type="text"
                  value={this.state.eventname}
                  onChange={this.onChange}
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
                  type="Date"
                  value={this.state.date}
                  onChange={this.onChange}
                  min={moment().format("YYYY-MM-DD")}
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
                  type="Time"
                  value={this.state.time}
                  onChange={this.onChange}
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
                  value={this.state.location}
                  onChange={this.onChange}
                   //   error={errors.password}

                  placeholder="Location"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="City" className="col-sm-3 control-label">
                City*
              </label>
              <div className="col-sm-9">
                <input
                  id="city"
                  type="text"
                  value={this.state.city}
                  onChange={this.onChange}
                   //   error={errors.password}

                  placeholder="City"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="category" className="col-sm-4 control-label">
              Category* 
              <div >
                <select value={this.state.category}  id="category" onChange={this.onChange}>
                  <option value="Private" >Private</option>
                  <option value="Corperate">Corperate</option>
                  <option value="Charity">Charity</option>
                  
                </select>
                </div> 
                
              </label>
              {/* <div className="col-sm-9">
                <input
                  id="category"
                  type="text"
                  value={this.state.category}
                  onChange={this.onChange}
                  placeholder="Category"
                  className="form-control"
                />
              </div> */}
            </div>
            <div className="form-group">
              <label htmlFor="description" className="col-sm-3 control-label">
                Description*
              </label>
              <div className="col-sm-9">
                <input
                  id="description"
                  type="text"
                  value={this.state.description}
                  onChange={this.onChange}
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
                  value={this.state.basicentry}
                  onChange={this.onChange}
                  placeholder="Basic Entry Price"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Vip" className="col-sm-3 control-label">
                Vip Entry
              </label>
              <div className="col-sm-9">
                <input
                  id="vipentry"
                  type="number"
                  value={this.state.vipentry}
                  onChange={this.onChange}
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
              Register
            </button>
            {/* <AddOrganizerModal
            show = {this.state.addModalShow}
            onHide = {addModalClose}
            /> */}
              {submitted ? ModalShow : null}

          </form>
          {/* /form */}
        </div>
        ;{/* ./container */}
      </div>
    );
  }
}

export default CreateEvent;

