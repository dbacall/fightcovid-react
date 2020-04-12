import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  user: user,
  userLoggedIn: userLoggedIn,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      userLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
