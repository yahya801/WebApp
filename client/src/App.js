import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Layout/Navbar";
import Landing from "./components/Layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
//import Findform from "./components/Findform";
import CreateEvent from "./components/createevent";
import Home from "./components/home";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}
export default App;