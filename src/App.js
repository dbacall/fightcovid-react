import React, { Component } from "react";
import "./App.css";
import myFirebase from "./firebase/firebase";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import PrivateRoute from "./components/private-route/PrivateRoute";

class App extends Component {
  constructor(props) {
    super(props);
    this.authListener();
    this.state = {
      user: {},
      userLoggedIn: "unknown",
    };
  }

  authListener() {
    myFirebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user, userLoggedIn: true });
      } else {
        this.setState({ user: null, userLoggedIn: false });
      }
    });
  }

  renderRedirectToHome = () => {
    if (this.state.userLoggedIn) {
      return <Redirect to="/" />;
    }
  };

  renderRedirectToLogin = () => {
    if (!this.state.userLoggedIn) {
      return <Redirect to="/login" />;
    }
  };

  render() {
    return (
      <Router>
        <div className="App">
          {this.renderRedirectToHome()}
          <Switch>
            <PrivateRoute
              exact
              path="/"
              component={Home}
              user={this.state.user}
              userLoggedIn={this.state.userLoggedIn}
            />
            {/* <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  user={this.state.user}
                  renderRedirectToLogin={this.renderRedirectToLogin}
                />
              )}
            /> */}

            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
