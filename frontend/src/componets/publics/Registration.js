import React, { Component, useState, Fragment } from "react";

import axios from "axios";
import { Redirect, Link } from "react-router-dom";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      role: null,
      address: "",
      isAuth: false,
      token: "",
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      role: this.props.match.params.role,
    });
  }

  // Input on change
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  // register
  onSubmit = async (e) => {
    e.preventDefault();

    const reg = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      role: this.state.role,
    };

    const body = JSON.stringify(reg);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // console.log(body);
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/auth/register`,
        body,
        config
      );

      this.setState({
        isAuth: true,
        token: res.data.token,
      });

      console.log(this.state.token);
      console.log(this.state.role);
    } catch (error) {
      alert("Error Login!!");
    }
  };
  render() {
    return (
      <Fragment>
        {this.state.isAuth ? (
          <Redirect isAuth={this.state.isAuth} to="/" />
        ) : (
          <div className="container ">
            <div className="">
              {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
              <div className="jumbotron " id="login-second">
                <div className="container">
                  <div className="d-flex justify-content-center">
                    <div className="card" id="login-card">
                      <div className="card-header">
                        <h3 className="mt-5 sign">Citizens Registration</h3>
                      </div>
                      <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                          <div className="input-group form-group">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                style={{ background: "#ffc312" }}
                              >
                                <i className="fa fa-user"></i>
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="username"
                              name="name"
                              value={this.state.name}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="input-group form-group">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                style={{ background: "#ffc312" }}
                              >
                                <i className="fa fa-envelope"></i>
                              </span>
                            </div>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              value={this.state.email}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="input-group form-group">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                style={{ background: "#ffc312" }}
                              >
                                <i className="fa fa-user"></i>
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              name="address"
                              placeholder="address"
                              value={this.state.address}
                              onChange={this.onChange}
                            />
                          </div>
                          {/* <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            style={{ background: "#ffc312" }}
                          >
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Department"
                        />
                      </div> */}
                          {/* <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            style={{ background: "#ffc312" }}
                          >
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Add"
                        />
                      </div> */}
                          <div className="input-group form-group">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                style={{ background: "#ffc312" }}
                              >
                                <i className="fa fa-key"></i>
                              </span>
                            </div>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="password"
                              name="password"
                              value={this.state.password}
                              onChange={this.onChange}
                            />
                          </div>
                          {/* <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            style={{ background: "#ffc312" }}
                          >
                            <i className="fa fa-key"></i>
                          </span>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Re-enter password"
                        />
                      </div> */}
                          {/* <div className="form-group">
                        <input
                          type="submit"
                          value="Register"
                          className="btn float-right login_btn btn-warning btn-block"
                        />
                      </div> */}
                          <button
                            type="submit"
                            value="submit"
                            name="submit"
                            className="btn btn-warning float-right login_btn btn-block mb-1"
                            // style={{
                            //   backgroundColor: social,
                            // }}
                          >
                            SignUp
                          </button>
                        </form>
                      </div>
                      <div className="">
                        <div className="d-flex justify-content-center links">
                          Already have an account?
                          <a href="/Login/user">Sign In</a>
                        </div>
                        <div className="d-flex justify-content-center">
                          <a href="/reset">Forgot your password?</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
export default Registration;
