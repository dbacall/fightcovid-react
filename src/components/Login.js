import React, { Component } from "react";
import myFirebase from "../firebase/firebase";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    myFirebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => console.log(user))
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h2>Log in</h2>
        <form>
          <input
            type="text"
            id="email"
            label="Email Address"
            name="email"
            onChange={this.handleChange}
          />
          <input
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={this.handleChange}
          />
          <input type="submit" name="Log in" onClick={this.handleLogin} />
        </form>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

export default Login;
