import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Landing from "./components/Layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/auth/Dashboard"
import Logout from './components/auth/Logout'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <Route exact path="/" component={Landing,Navbar} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login}  />
          <Route exact path = "/dashboard" component={Dashboard} /> 
          <Route exact path = "/logout" component={Logout} /> 
          
        </div>
      </Router>
    );
  }
}
export default App;