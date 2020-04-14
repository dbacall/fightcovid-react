import React from "react";
import { Route, Redirect } from "react-router-dom";
import ReactLoading from "react-loading";

const PrivateRoute = ({ component: Component, user, userLoggedIn, ...rest }) =>
  userLoggedIn === "unknown" ? (
    <ReactLoading
      type={"spin"}
      color={"black"}
      height={"20%"}
      width={"20%"}
      className={"loading"}
    />
  ) : (
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
