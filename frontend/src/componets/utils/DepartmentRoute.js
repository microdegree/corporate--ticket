import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthenticated from "./utils";

const DepartmentRoute = ({ component: Component, ...rest }) => {
  //   isAuthenticated = isAuthenticated();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={`/DepartmentLogin`} />
        )
      }
    />
  );
};

export default DepartmentRoute;
