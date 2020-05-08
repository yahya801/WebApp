import React, { useState,useEffect} from "react";
import axios from 'axios'

function eventsearch() {
  

    return (
      <div>
      <form className="events-search">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <input type="date" placeholder="Date" />
            </div>
            <div className="col-12 col-md-3">
              <input type="text" placeholder="Event" />
            </div>
            <div className="col-12 col-md-3">
              <input type="text" placeholder="Location" />
            </div>
            <div className="col-12 col-md-3">
              <input
                className="btn gradient-bg"
                type="submit"
                defaultValue="Search Events"
              />
            </div>
          </div>
        </div>
      </form>
      ;
    </div>
    );
  
}

export default eventsearch;
