import React, { Component } from "react";
import myFirebase from "../firebase/firebase";
import { Link } from "react-router-dom";

class Register extends Component {
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

  handleRegistration = (e) => {
    e.preventDefault();
    myFirebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h2>Register</h2>
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
          <input
            type="submit"
            name="Register"
            onClick={this.handleRegistration}
          />
        </form>
        <Link to="/login">Log in</Link>
      </div>
    );
  }
}

export default Register;
