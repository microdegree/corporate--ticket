import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminHome from "./AdminHome";
import AdminNavbar from "./AdminNavbar";
import addDonors from "./addDonors";
import showDonors from "./ShowDonors";

function App() {
  return (
    <Router>
      <div className="">
        <AdminNavbar />

        <Switch>
          <Route exact path={"/citizen/Home"} component={AdminHome} />

          <Route path={"/citizen/addDonors"} component={addDonors} />
          <Route path={"/citizen/showDonors"} component={showDonors} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
