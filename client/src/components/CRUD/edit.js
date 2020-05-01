import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import Moment from 'moment'
export class edit extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
        Event: []
        
        }
        // this.onChange = this.onChange.bind(this);
    }
    async componentWillMount(){
        this.getEventDetails()
    }
   onChange = event => {
        const { id, value } = event.target;
        this.setState({
          [id]: value
        });
      }

     getEventDetails(){
        let eventid= this.props.match.params.id
        axios.get(`http://localhost:3000/event/edit/${eventid}`)
        .then(res => {
          //  console.log(res.data.event)
           this.setState({ Event: res.data.event });  
            console.log(this.state.Event)
        })
        .catch(err => {
            console.log(err);
            console.error(err);
          });
        
    }
    render() {
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
              <label htmlFor="eventname" className="col-sm-3 control-label">
                Event Name
              </label>
              <div className="col-sm-9">
                <input
                  id="eventname"
                  type="text"
                  value={this.state.Event.eventname}
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
                  type="text"
                  value={Moment( this.state.Event.date).format('L')}
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
                  type="text"
                  value={this.state.Event.time}
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
                  value={this.state.Event.location}
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
                  value={this.state.Event.category}
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
                  value={this.state.Event.description}
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
                  value={this.state.Event.price}
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

export default edit
