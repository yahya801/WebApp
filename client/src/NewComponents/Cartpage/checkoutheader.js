import React, { Component } from "react";
import Header from '../header'
import img1 from '../../images/events-page-header-bg.jpg'

export class pageheader extends Component {
  render() {
    return (
      <div>
          <Header /> 
        <div className="page-header events-page-header" style={{ backgroundImage: `url(${img1})`}}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <header className="entry-header">
                  <h3 className="entry-title">CheckOut</h3>
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
