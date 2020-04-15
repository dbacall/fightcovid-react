import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
    const URL =
      "https://api.landbot.io/v1/customers/?search_by=email&search=samdhesi@icloud.com";
    const headers = {
      Authorization: "Token 20889e7afb06e0946b806b2a0a90a9bb0b9c5981",
      "Content-Type": "application/json",
    };
    axios
      .get(PROXY_URL + URL, { headers })
      .then((response) => {
        console.log(response.data.customers);
        this.setState({
          data: response.data.customers,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // renderData = () => {
  //   console.log(this.state.data !== {});
  //   if (this.state.data === {}) {
  //     return <p>Loading</p>;
  //   } else {
  //     return <p>{this.state.data[0].email}</p>;
  //   }
  // };

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Profile</h1>
        <ul>
          {data.map((customer) => (
            <li key={customer.name}>{customer.wellorunwell}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Profile;
