import React, { Component } from "react";
import { Link,Redirect } from "react-router-dom";
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    let loggedin = false
    this.state = {
      email: "",
      password: "",
      errors: {},
      loggedin
    };
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  
onSubmit = e => {
    e.preventDefault();
    
const userData = {
      email: this.state.email,
      password: this.state.password
    };
    axios
    .post("http://localhost:3000/user/signin", userData)
    .then(response => {
      localStorage.setItem("token",response.data.token)
      this.setState({
        loggedin: true
      })
  })
    .catch(err => {
      console.log(err)
      console.error(err);
    });
console.log(userData);
  };
render() {
    const { errors } = this.state;
      if (this.state.loggedin){
        return <Redirect to ='/dashboard' />

      }
return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;