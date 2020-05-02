import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainHome from "./MainHome";

import MainNavbar from "./MainNavbar";
import ShowCompany from "./ShowCompany";
import ShowStudent from "./ShowStudent";
import Category from "./Category";
import ShowComplaints from "./ShowComplaints";

function App() {
  return (
    <Router>
      <div className="">
        <MainNavbar />

        <Switch>
          <Route exact path={"/admin/Home"} component={MainHome} />
          <Route exact path={"/admin/category"} component={Category} />
          <Route path={"/admin/ShowCitizen"} component={ShowCompany} />
          <Route path={"/admin/ShowDepartment"} component={ShowStudent} />
          <Route path={"/admin/ShowComplaints"} component={ShowComplaints} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
