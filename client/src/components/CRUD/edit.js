import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
export class edit extends Component {
    constructor(props) {
        super(props);
        let submitted = false;
        this.state = {
        Event: []
        
        }
        this.onChange = this.onChange.bind(this);
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
              <div className="container">
                <div className="row">
                  <div className="col s8 offset-s2">
                    <Link to="/" className="btn-flat waves-effect">
                      <i className="material-icons left">keyboard_backspace</i> Back
                      to home
                    </Link>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                      <p className="black-text text-darken-4">
                        <h4> Edit Event</h4>
                      </p>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                      <div className="input-field col s12">
                        <input
                          id="eventname"
                          type="text"
                          value={this.state.Event.eventname}
                          onChange={this.onChange}
                        />
                        <label htmlFor="event-name">Event-Name</label>
                      </div>
                      <div className="input-field col s12">
                        <input
                          id="date"
                          type="Date"
                          value={this.state.Event.date}
                          onChange={this.onChange}
                        />
                        <label htmlFor="date">Date</label>
                      </div>
                      <div className="input-field col s12">
                        <input
                          id="location"
                          type="text"
                          value={this.state.Event.location}
                          onChange={this.onChange}
                        />
                        <label htmlFor="location">Location</label>
                      </div>
                      <div className="input-field col s12">
                        <input
                          id="category"
                          type="text"
                          value={this.state.Event.category}
                          onChange={this.onChange}
                        />
                        <label htmlFor="category">Category</label>
                      </div>
                      <div className="input-field col s12">
                        <input
                          id="description"
                          type="text"
                          value={this.state.Event.description}
                          onChange={this.onChange}
                        />
                        <label htmlFor="description">Description</label>
                      </div>
                      <div className="input-field col s12">
                        <input
                          id="price"
                          type="number"
                          value={this.state.Event.price}
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

export default edit
