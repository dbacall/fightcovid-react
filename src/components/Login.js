import React, { Component } from "react";
import myFirebase from "../firebase/firebase";
import { Link } from "react-router-dom";
import validateLogin from "./validation/LoginValidation";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { errors, isValid } = validateLogin(
      this.state.email,
      this.state.password
    );
    if (isValid) {
      myFirebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => console.log(user))
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.setState({
        errors,
      });
    }
  };

  render() {
    const { errors } = this.state;
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
          <span className="">{errors.email}</span>
          <input
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={this.handleChange}
          />
          <span className="">{errors.password}</span>
          <input type="submit" name="Log in" onClick={this.handleLogin} />
        </form>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

export default Login;
