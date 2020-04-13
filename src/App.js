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
    this.state = {
      user: {},
      userLoggedIn: false,
      redirect: false,
    };
  }

  componentWillMount() {
    this.authListener();
  }

  authListener() {
    myFirebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user, userLoggedIn: true, redirect: true });
      } else {
        this.setState({ user: null, userLoggedIn: false, redirect: false });
      }
    });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <Router>
        <div className="App">
          {this.renderRedirect()}
          <Switch>
            <PrivateRoute
              exact
              path="/"
              component={Home}
              user={this.state.user}
              userLoggedIn={this.state.userLoggedIn}
            />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
