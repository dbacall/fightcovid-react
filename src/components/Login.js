import React, { Component } from "react";
import myFirebase from "../firebase/firebase";

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

  handleSubmit = (e) => {
    e.preventDefault();
    myFirebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log("log in", user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  signup = (e) => {
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

  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        <h2>Sign up</h2>
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
          <input type="submit" name="Sign Up" onClick={this.handleSubmit} />
        </form>
        <button onClick={this.signup}>Signup</button>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Login;
