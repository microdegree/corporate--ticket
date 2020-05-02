import React, { Component } from "react";
// import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

class Registration extends Component {
  state = {
    // name={},
  };

  render() {
    return (
      <div className="container mt-5 mtop ">
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="" id="login-second">
            <div className="page-wrapper p-t-50 p-b-50">
              <div className="wrapper wrapper--w900">
                <div className="card cardH card-6 ">
                  <div className="card-heading">
                    <h2 className="title text-dark ">
                      &nbsp;&nbsp;&nbsp;&nbsp;Department Registration
                    </h2>
                  </div>
                  <div className="card-body  text-light">
                    <form method="POST">
                      <div className="form-row">
                        <div className="name"> name</div>
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                            name="full_name"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="name">ID number</div>
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                            name="full_name"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="name">Department</div>
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                            name="full_name"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="name">Phone number</div>
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                            name="full_name"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="name">Password</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="name">Re-Password</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn--radius-2 btn-success"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Registration;
