import React, { Component } from "react";

export class login1 extends Component {
  render() {
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
                  <form action method="post" name="login">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
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
                      />
                    </div>
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

export default login1;
