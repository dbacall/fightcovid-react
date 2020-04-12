import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
          <input type="submit" name="Register" onClick={this.handleSubmit} />
        </form>
        <Link to="/login">Log in</Link>
      </div>
    );
  }
}

export default Register;
