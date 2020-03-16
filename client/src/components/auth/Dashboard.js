import React, { Component } from "react";
import {Link,Redirect } from "react-router-dom"
import Logout from './Logout';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        console.log(token)
        let loggedin = true
        if (token == null){
          loggedin = false
        }
        this.state = {
          email: "",
          password: "",
          errors: {},
          loggedin
        };
      }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    
  render() {
    if (this.state.loggedin == false){
      return <Redirect to="/login" />
    }
   

    return (
      <div>
          <form action="/createevent"> 
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
            
          }}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
       >
          Create Event
        </button>
        </form>
        <form action="/updateevent">
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
            leftpadding: "1rem"
          }}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Update
        </button>
        </form>
        <form action="/deleteevent">
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
          }}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Delete
        </button>
        </form>
       <Link to="/logout">Log out</Link>
      </div>
    );
  }
}

export default Dashboard;
