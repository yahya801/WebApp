import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export class create1 extends Component {
  constructor(props) {
    super(props);
    let submitted = false;
    let userloggedin= false;
    this.state = {
      eventname: this.props.eventname || "",
      date: this.props.date || "",
      location: this.props.loc || "",
      category: this.props.category || "",
      description: this.props.description || "",
      price: this.props.price || "",
      time: this.props.time || "",
      submitted,
      edit: this.props.edit || false,
      selectedFile: null,
      userloggedin 
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    console.log(localStorage.getItem("user"))
    e.preventDefault();

    const eventData = {
      eventname: this.state.eventname,
      date: this.state.date,
      location: this.state.location,
      category: this.state.category,
      description: this.state.description,
      price: this.state.price,
      time: this.state.time,
      //  image: this.state.selectedFile
    };
    // const fd = new FormData();
    // fd.append('image',this.state.selectedFile)
    // console.log(eventData)
    // fd.append('name',eventData)

    var fd = new FormData()
    // fd.append('files',this.state.selectedFile)
    // var statebody = Object.assign({},eventData)
    // fd.append('state',JSON.stringify(statebody))
    // axios.post('/api/',fd)
    console.log(fd.state)
    // axios
    //   .post("http://localhost:3000/event/create",eventData)
    //   .then(() => {
    //     this.setState({
    //       submitted: true,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     console.error(err);
    //   });
    // console.log(eventData);
  };
  fileSelectedHandler = e => {
    this.setState({
      selectedFile: e.target.files[0]
    })
    console.log(e.target.files[0])
  }
  notloggedin(){
    window.location =("/")
  }
  render() {
    if(!localStorage.getItem("user")== ""){
      console.log("ahajcb")
      }
      else{
       return  <Redirect to="/" />
      }
    
    
    return (
      
      <div>
        <div style={{paddingLeft: "100px"}}className="container">
          <form
            noValidate
            onSubmit={this.onSubmit}
            className="form-horizontal"
            role="form"
          >
            <h2>Create Event.</h2>

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
              <label htmlFor="category" className="col-sm-3 control-label">
                Category*
              </label>
              <div className="col-sm-9">
                <input
                  id="category"
                  type="text"
                  value={this.state.category}
                  onChange={this.onChange}
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
              <label htmlFor="Price" className="col-sm-3 control-label">
                Price*
              </label>
              <div className="col-sm-9">
                <input
                  id="price"
                  type="number"
                  value={this.state.price}
                  onChange={this.onChange}
                  placeholder="Price"
                  className="form-control"
                />
              </div>
            </div>
            
            <div>
            <label htmlFor="Upload Image" className="col-sm-3 control-label">
                Upload Image*
              </label>
              <br/>
              <div  style ={{paddingLeft: "15px"}}>
              <input type ="file" onChange={this.fileSelectedHandler} />
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
          </form>
          {/* /form */}
        </div>
        ;{/* ./container */}
      </div>
    );
  }
}

export default create1;
