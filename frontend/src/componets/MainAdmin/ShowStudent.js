import React, { Component } from "react";
import "../CSS/donor.css";
import axios from "axios";

export default class ShowStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }
  componentDidMount = async () => {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/users/department`,
        config
      );
      this.setState({
        users: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  onDeleteUser = async (user, e) => {
    e.preventDefault();
    // console.log(user);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.delete(`http://localhost:5000/api/v1/users/${user}`, config);

      alert("User Deleted");
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    return (
      <div>
        <section>
          <div id="portfolio">
            <div className="container showtop  login-second ">
              <div className="page-title text-center">
                <h1 className="text-dark">Department</h1>

                <hr className="pg-titl-bdr-btm" />
              </div>
              <div className="row">
                <div className="col-lg-12 ">{/* categotize */}</div>
              </div>

              <div className="row" id="" style={{ opacity: 1 }}>
                {/*  */}
                <div className="container pt-4">
                  <div className=" tabletrans ">
                    <div className="well">
                      <div className="row mb-5">
                        <div className="col-md-6">
                          <div className="pull-right">
                            <a
                              href="/farmer/addItems"
                              className="btn btn-info btn-sm p-2"
                            >
                              Add Department
                            </a>
                          </div>
                        </div>

                        <div className="pull-left">
                          <a href="/FHome" className="btn btn-info btn-sm p-2">
                            Back to Home
                          </a>
                        </div>
                      </div>
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>
                              <label className="text-dark">No.</label>
                            </th>
                            <th>
                              <label className="text-dark">Name</label>
                            </th>

                            <th>
                              {" "}
                              <label className="text-dark">Address</label>
                            </th>
                            <th>
                              {" "}
                              <label className="text-dark">Email</label>
                            </th>

                            <th>
                              {" "}
                              <label className="d-flex justify-content-center text-dark">
                                Actions
                              </label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.users.map((user, index) => (
                            <tr key={user._id}>
                              <td className="tbld text-dark">{index + 1}</td>
                              <td className="tbld text-dark">{user.name}</td>
                              <td className="tbld text-dark">{user.address}</td>
                              <td className="tbld text-dark">{user.email}</td>

                              <td className="d-flex justify-content-center tbld">
                                <div className="btn-group ">
                                  <a
                                    href=""
                                    className="btn btn-danger btn-md mr-5"
                                    value={user._id}
                                    onClick={(e) =>
                                      this.onDeleteUser(user._id, e)
                                    }
                                  >
                                    <i className="fa fa-trash-o"></i>
                                  </a>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
