import React, { Fragment } from "react";
import Login from "./componets/Login";
import DepartmentLogin from "./componets/DepartmentLogin";

import "./componets/CSS/Home.css";
import PrivateRoute from "./componets/utils/PrivateRoute";
import DepartmentRoute from "./componets/utils/DepartmentRoute";

import Footer from "./componets/publics/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Functions from "./componets/Admin/Functions";

import All from "./componets/publics/All";

import UFunctions from "./componets/Company/UFunctions";

import MFunctions from "./componets/MainAdmin/MFunctions";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="">
          <Switch>
            <Route exact path={"/Login/:type"} component={Login} />
            <Route
              exact
              path={"/DepartmentLogin"}
              component={DepartmentLogin}
            />
          </Switch>
          {/* <AdminNavbar />
          <CompanyNavbar />
          <MainNavbar />
           */}
          <Switch>
            <PrivateRoute
              role="citizen"
              path={"/citizen/"}
              component={Functions}
            />
            <DepartmentRoute
              role="department"
              path={"/department/"}
              component={UFunctions}
            />
            <PrivateRoute
              role="admin"
              path={"/admin/"}
              component={MFunctions}
            />
            {/* <Route exact path={"/admin"} component={UserHome} /> */}

            {/* <Route exact path={"/admin"} component={UserHome} /> */}

            <All></All>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
