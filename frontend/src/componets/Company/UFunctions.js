import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CompanyHome from "./CompanyHome";
import CompanyNavbar from "./CompanyNavbar";
import Category from "./Category";
import ShowMore from "./ShowMore";

function App() {
  return (
    <Router>
      <div className="">
        <CompanyNavbar />

        <Switch>
          <Route exact path={"/department/Home"} component={CompanyHome} />
          <Route exact path={"/department/ShowMore"} component={ShowMore} />

          <Route exact path={"/department/Category"} component={Category} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
