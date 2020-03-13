import React, { Component } from "react";

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          errors: {}
        };
      }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    
  render() {
   

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
      </div>
    );
  }
}

export default Dashboard;
