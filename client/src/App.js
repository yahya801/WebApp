import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./components/Layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/auth/Dashboard";
import Logout from "./components/auth/Logout";
import sidebar from "./components/Layout/sidebar";
import create from "./components/CRUD/create";
import read from "./components/CRUD/read";
import NB from "./components/Layout/Nvbar";
import Home from "./components/home";
import EventList from "./components/CRUD/eventlist";
import About from "./components/Layout/about";

import Event from "./components/Mainpage/event";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NB />
          {/* <Route exact path="/" component={Landing} /> */}
          <Route exact path="/" component={Event} />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/dashboard" component={EventList} />
          <Route exact path = "/about" component = {About} />

          <Route exact path="/create-event" component={create} />
          <Route exact path="/read-events" component={EventList} />

          <Route exact path="/update-event" component={sidebar} />
          <Route exact path="/delete-event" component={sidebar} />
        </div>
      </Router>
    );
  }
}
export default App;
