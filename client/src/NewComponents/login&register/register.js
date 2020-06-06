import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../footer"

class register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: "",
      errmissing: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    axios
      .post("http://localhost:3000/user/register", newUser)
      .then(() => {
        console.log("User Created");
        window.location = "/login";
      })
      .catch((err) => {
        console.error(err);
        this.setState({ errmissing: err.response.data.msg });
      });
    console.log(newUser);
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="container">
          <form
            noValidate
            onSubmit={this.onSubmit}
            className="form-horizontal"
            role="form"
          >
            <h2>Registration</h2>
            <p className="grey-text text-darken-1">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
            <div className="form-group">
              <label htmlFor="firstName" className="col-sm-3 control-label">
                Full Name
              </label>
              <div className="col-sm-9">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="form-control"
                  //   autofocus
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="col-sm-3 control-label">
                Email*{" "}
              </label>
              <div className="col-sm-9">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="form-control"
                  name="email"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-sm-3 control-label">
                Password*
              </label>
              <div className="col-sm-9">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-sm-3 control-label">
                Confirm Password*
              </label>
              <div className="col-sm-9">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  type="password"
                  id="password2"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
            </div>
            <div>{this.state.errmissing}</div>

            <div className="form-group">
              <div className="col-sm-9 col-sm-offset-3">
                <span className="help-block">*Required fields</span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
          {/* /form */}
        </div>
        ;{/* ./container */}
        <Footer />
      </div>
    );
  }
}

export default register;
