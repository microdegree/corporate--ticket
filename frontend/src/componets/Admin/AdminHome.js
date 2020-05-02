import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import "../CSS/donor.css";
import axios from "axios";

class AdminHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      title: "",
      description: "",
      department: "",
      ward: "",
      email: "",
      phone: "",

      file: null,
    };
    this.onChange = this.onChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  componentDidMount = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/category/",
        config
      );
      this.setState({
        category: res.data.data,
      });
      console.log(this.state.category);
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  // Input on change
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  // Dropdown change
  handleDropdownChange(e) {
    this.setState({ department: e.target.value });
  }
  // fileupload
  onChangeHandler = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", this.state.file, this.state.file.name);

    // console.log(data);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/complaint/photo`,
        data,
        config
      );
      console.log(res.data.data);

      const products = {
        title: this.state.title,
        description: this.state.description,
        department: this.state.department,
        address: this.state.address,
        ward: this.state.ward,
        email: this.state.email,
        phone: this.state.phone,
        issue: this.state.issue,
        photo: res.data.data,
      };
      const body = JSON.stringify(products);
      console.log(body);
      const config1 = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const result = await axios.post(
        `http://localhost:5000/api/v1/complaint`,
        body,
        config1
      );
      console.log(result.data.data);
      alert(`Complaint Added ${result.data.data.title}`);
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    return (
      <section id="section2">
        <div className="container itmtop">
          <div className="">
            {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
            <div className="" id="login-second">
              <div className="page-wrapper p-t-50 p-b-50">
                <div className="wrapper wrapper--w900 ">
                  <div className="card cardH card-6 bg-dark">
                    <div className="card-heading m-4 ">
                      <h2 className="title">Add Complaints</h2>
                    </div>
                    <div className="card-body">
                      <form
                        onSubmit={this.onSubmit}
                        encType="multipart/form-data"
                      >
                        <div className="form-row frow">
                          <div className="name">Complaints Title:</div>
                          <div className="value">
                            <input
                              className="input--style-6"
                              type="text"
                              name="title"
                              value={this.state.title}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                        <div className="form-row frow">
                          <div className="name">Complaints Description:</div>
                          <div className="value">
                            <input
                              className="input--style-6"
                              type="text"
                              name="description"
                              placeholder=""
                              value={this.state.description}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>

                        {/* <div className="form-row frow">
                          <div className="name">Department</div>
                          <div className="value">
                            <div className="input-group">
                              <input
                                className="input--style-6"
                                type="text"
                                name="desc"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div> */}
                        <div className="form-row frow">
                          <div className="name col-md-5">Department:</div>

                          <select
                            id="dropdown "
                            className="btn bg-light col-md-6 form-control"
                            onChange={this.handleDropdownChange}
                          >
                            <option value="no cat">None</option>
                            {this.state.category.map((cat) => (
                              <option key={cat._id} value={cat._id}>
                                {cat.catname}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* <div className="form-row frow">
                          <div className="name">Complaints name</div>
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
                        </div> */}
                        <div className="form-row frow">
                          <div className="name">Ward Number</div>
                          <div className="value">
                            <div className="input-group">
                              <input
                                className="input--style-6"
                                type="text"
                                name="ward"
                                placeholder=""
                                value={this.state.ward}
                                onChange={this.onChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-row frow">
                          <div className="name">Contact</div>
                          <div className="value">
                            <div className="input-group">
                              <input
                                className="input--style-6"
                                type="text"
                                name="phone"
                                placeholder=""
                                value={this.state.phone}
                                onChange={this.onChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-row frow">
                          <div className="name">Email</div>
                          <div className="value">
                            <div className="input-group">
                              <input
                                className="input--style-6"
                                type="email"
                                name="email"
                                placeholder=""
                                value={this.state.email}
                                onChange={this.onChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-row frow">
                          <div className="name">Address</div>
                          <div className="value">
                            <div className="input-group">
                              <input
                                className="input--style-6"
                                type="text"
                                name="address"
                                placeholder=""
                                value={this.state.address}
                                onChange={this.onChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-row frow">
                          <div className="name">Facing Issue Form</div>
                          <div className="value">
                            <div className="input-group">
                              <input
                                className="input--style-6"
                                type="date"
                                name="issue"
                                placeholder=""
                                value={this.state.issue}
                                onChange={this.onChange}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-row frow">
                          <div className="name">Upload Image:</div>
                          <div className="value">
                            <div className="input-group js-input-file">
                              <input
                                className="input-file"
                                type="file"
                                name="file"
                                id="file"
                                onChange={this.onChangeHandler}
                              />
                              <label className="label--file" htmlFor="file">
                                Choose file
                              </label>
                            </div>
                            <div className="label--desc">
                              Upload your Document/Id proff or any other
                              relevant file. Max file size 50 MB
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <button
                            className="btn btn-radius-2 btn-primary"
                            type="submit"
                          >
                            Add
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AdminHome;
