import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class login extends React.Component {
  constructor(props) {
    super(props);
    let loggedin = false;
    this.state = {
      email: "",
      password: "",
      errors: "",
      loggedin,
      errmsg: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post(`http://localhost:3000/user/signin`, userData)
      .then((response) => {
        console.log(response.data.user);
        localStorage.setItem("id",response.data.user.id)
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user",response.data.user.name)
      
        this.setState({
      //    loggedin: true,
        });
        if (response.data.user.role == "super-admin"){
            console.log('hell')
          window.location= 'http://localhost:3000/admin/resources/user';

        }
        if (response.data.user.role == "admin"){
            console.log('hell')
           window.location= '/orgdash';

        }
        if (response.data.user.role == "customer"){
          console.log('hell')
         window.location= '/userdash';

      }
        // window.location = "/read-events";
        //window.location= 'http://localhost:3000/admin/resources/user';
      })
      .catch((err) => {
        //  console.log(err);
        console.error(err.response.data);
        this.setState({ errmsg: err.response.data.msg });
        console.log(this.state.errmsg);
      });
  };
  onredirect = (e) => {
    window.location.replace("//http://localhost:3000/admin/resources/user");
  };
  render() {
    const { errors } = this.state;
    if (this.state.loggedin) {
      //     return <Redirect component={() => {
      //  window.location= 'http://localhost:3000/admin/resources/user';
      // //  to="http://localhost:3000/admin/resources/user" />;
      //     } } />
    }
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <div id="first">
                <div className="myform form ">
                  <div className="logo mb-3">
                    <div className="col-md-12 text-center"></div>
                  </div>
                  <form onSubmit={this.onSubmit} name="login">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter Password"
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                      />
                    </div>
                    <div>{this.state.errmsg}</div>
                    <div className="form-group">
                      <p className="text-center">
                        By signing up you accept our{" "}
                        <a href="#">Terms Of Use</a>
                      </p>
                    </div>
                    <div className="col-md-12 text-center ">
                      <button
                        type="submit"
                        className=" btn btn-block mybtn btn-primary tx-tfm"
                      >
                        Login
                      </button>
                    </div>
                    <div className="col-md-12 ">
                      <div className="login-or">
                        <hr className="hr-or" />
                        <span className="span-or">or</span>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <p className="text-center">
                        <a
                          href="javascript:void();"
                          className="google btn mybtn"
                        >
                          <i className="fa fa-google-plus"></i> Signup using
                          Google
                        </a>
                      </p>
                    </div>
                    <div className="form-group">
                      <p className="text-center">
                        Don't have account?{" "}
                        <a href="/register" id="signup">
                          Sign up here
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}

export default login;


