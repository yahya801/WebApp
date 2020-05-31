import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./components/Layout/Landing";
import Register from './NewComponents/login&register/register'
// import Register from "./components/auth/Register";
import Login from "./NewComponents/login&register/login";

import Dashboard from "./components/auth/Dashboard";
import Logout from "./components/auth/Logout";
import sidebar from "./components/Layout/sidebar";
import Create from "./components/CRUD/create";
import read from "./components/CRUD/read";
import NB from "./components/Layout/Nvbar";
import Edit from './components/CRUD/edit'
import Home from "./components/home";
import EventList from "./components/CRUD/eventlist";
import About from "./components/Layout/about";
import Footer from "./NewComponents/footer"
import Header from "./NewComponents/header"
import Info from "./NewComponents/info"
import Newsletter from './NewComponents/newsletter'
import EventHeader from './NewComponents/eventpage/pageheader'
import Home1 from './NewComponents/home'
import EventpageHeader from './NewComponents/eventpage/pageheader'
import EventSearch from './NewComponents/eventpage/eventsearch'
// import Eventpage from './NewComponents/eventpage/eventspage'
import Eventcards from './NewComponents/eventpage/eventcard'
import Google from './NewComponents/googlemap'
import Container from './NewComponents/singleevent/container'
import CRUDheader from './NewComponents/CRUD/crudheader'
import OrgDashboard from './NewComponents/OrganizerDashboard/Dashboard'


import Event from "./components/Mainpage/event";

class App extends Component {
  render() {
    return (
      <Router>
       
        <div className="App">
          
         <Route exact path="/" component={Header} />
          <Route exact path="/" component={Home1} />
          <Route exact path="/" component={Info} />
          <Route exact path="/" component={Newsletter} />
          
          {/* <NB /> */}
          {/* <Route exact path="/" component={Landing} /> */}
          {/* <Route exact path="/" component={Event} /> */}
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/events" component={EventpageHeader} />
         
          <Route exact path="/events" component={EventSearch} />
          <Route exact path="/events" component={Eventcards} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={EventpageHeader} />
          <Route exact path="/login" component={Login} />
         
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/dashboard" component={EventList} />
          <Route exact path = "/about" component = {About} />
          <Route exact path="/create-event" component={CRUDheader} />
          <Route exact path="/create-event" component={Create} />
          <Route path ="/single-event" component={Container} />
          <Route exact path="/read-events" component={EventpageHeader} />
          <Route exact path="/read-events" component={EventList} />
          {/* <Route exact path="/read-events" component={Edit} /> */}
          <Route path='/edit-event/:id' component = {Edit} />
          {/* <Route exact path="/edit-event/:id" component = {edit} /> */}
          <Route exact path="/update-event" component={sidebar} />
          <Route exact path="/delete-event" component={sidebar} />
          {/* <Route exact path="/single-event" component={Container} /> */}
          <Route exact path = "/org-dashboard" component = {OrgDashboard}/>

          <Footer />
        </div> 
      </Router>
    );
  }
}
export default App;
