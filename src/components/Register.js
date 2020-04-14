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
    const inputsValid = this.validateInputs(
      this.state.email,
      this.state.password
    );
    if (inputsValid) {
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

  validateInputs = (email, password) => {
    const { errors, isValid } = validateRegistration(email, password);
    this.setState({
      errors,
    });
    return isValid;
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
