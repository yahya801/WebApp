import React from 'react';
import Login from './components/login'
//import FindForm from './components/Findform'
//import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {


  return (
    <Router>
    <div >
      <Switch>
          <Route exact path="/">
          <h1 >   Register </h1>
          <Login />
          </Route>
          </Switch>
     
      
     
    </div>
    </Router>
  );
}

export default App;
