import React, { Component } from "react";

export class sidebar extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          {/* Sidebar */}
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3>CRUD</h3>
            </div>
            <ul className="list-unstyled components">
              <li className="active">
                <a
                  href="/home"
                
                  className="dropdown-toggle"
                >
                  Home
                </a>

                <ul className="collapse list-unstyled" id="homeSubmenu"></ul>
              </li>
              <br />
              <li>
                <a href="/create-event">Create</a>
              </li>
              
              <li>
                <a href="/read-events">Read</a>
              </li>
              <br />
              <li>
                <a href="/update-event">Update</a>
              </li>
              <br />
              <li>
                <a href="/delete-event">Delete</a>
              </li>
            </ul>
          </nav>
          {/* Page Content */}
        </div>
       {/* <div id="pagecontent">
           <h2>Welcome to the Admin Panel </h2>
           <p>Here you will be able to apply CRUD on the project</p>
    </div> */}
      </div>
      
    );
  }
}

export default sidebar;
