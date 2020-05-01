import React, { Component } from "react";
import Header from '../header'
import img1 from '../../images/events-page-header-bg.jpg'
import axios from 'axios'

export class pageheader extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      eventname: this.props.eventname
    };
  }
 
 
  render() {
  
    
    return (
      <div>
          <Header /> 
        <div className="page-header events-page-header" style={{ backgroundImage: `url(${img1})`}}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <header className="entry-header">
                  <h1 className="entry-title">{this.state.eventname}</h1>
                </header>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default pageheader;
