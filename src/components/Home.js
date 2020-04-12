import React, { Component } from "react";
import myFirebase from "../firebase/firebase";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    myFirebase.auth().signOut();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>You are logged in !!!</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
export default Home;
