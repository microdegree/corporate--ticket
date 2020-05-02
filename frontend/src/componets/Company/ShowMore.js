import React, { Component } from "react";

export default class QuickModel extends Component {
  state = {
    cat: [],
    user: [],
    dept: [],
  };

  componentDidMount = async () => {
    this.setState({ cat: this.props.location.state.cat });
    this.setState({ dept: this.props.location.state.dept });
    this.setState({ user: this.props.location.state.user });
  };
  render() {
    console.log(this.state);
    const { title, photo, phone, issue, ward } = this.state.cat;
    const { email, address, name } = this.state.user;
    // console.log);
    return (
      <div>
        <section className="section-bg">
          <div id="portfolio  ">
            <div className="container mt-4  ">
              <div className="page-title text-center">
                <h1 className="text-dark">Complaint About {title}</h1>

                <hr className="pg-titl-bdr-btm" />
              </div>

              <div className="" id="" style={{ opacity: 1 }}>
                {/*  */}
                <div className="container ">
                  <div className=" tabletrans ">
                    <div className="well">
                      {/* <div className="row mb-5"></div> */}
                      <div className="card">
                        <div className="container-fliud  ">
                          <div className="wrapper row mb-4">
                            <div className="preview col-md-6 mt-4">
                              <div className="preview-pic tab-content ">
                                <img
                                  src={photo}
                                  alt="img1"
                                  width="100%"
                                  height="100%"
                                />
                              </div>
                            </div>
                            <div className="details col-md-6">
                              {/* <h3 className="product-title mb-5">
                                Doctor Deatail
                              </h3> */}
                              <h3 className="product-title mb-5">
                                {/* {user.name} */}
                              </h3>
                              <i>
                                <h4>{name}</h4>

                                <h4>
                                  <b>{email}</b>
                                </h4>

                                <h4>
                                  <b>Contact:</b> {phone}
                                </h4>
                                <h4>
                                  <b>Ward: </b>
                                  {ward}
                                </h4>
                                <h4>
                                  <b>Issue from:</b> {issue}
                                </h4>

                                {/* <h4>Fees: ₹{fees}</h4> */}
                              </i>
                              <div className="action ">
                                <button
                                  className="add-to-cart btn btn-warning"
                                  type="button"
                                >
                                  Acknowledge
                                </button>
                                {/* <button
                                  className="like btn btn-default"
                                  type="button"
                                >
                                  <span className="fa fa-heart"></span>
                                </button> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
