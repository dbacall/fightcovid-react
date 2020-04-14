import React, { Component } from "react";
import myFirebase from "../firebase/firebase";
import { Link } from "react-router-dom";
import validateRegistration from "./validation/RegistrationValidation";

class Register extends Component {
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

  handleRegistration = (e) => {
    e.preventDefault();
    const { errors, isValid } = validateRegistration(
      this.state.email,
      this.state.password
    );
    this.setState({
      errors,
    });
    if (isValid) {
      myFirebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
          console.log(user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    const { errors } = this.state;
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
          <span className="">{errors.email}</span>
          <input
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={this.handleChange}
          />
          <span className="">{errors.password}</span>
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
