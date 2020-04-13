import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  user,
  userLoggedIn,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      userLoggedIn ? (
        <Component {...props} user={user} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
