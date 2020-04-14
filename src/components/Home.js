import React, { Component } from "react";
import myFirebase from "../firebase/firebase";
// import {
//   WrapperLandbot,
//   WrapperIframe,
//   WrapperWhatsApp,
// } from "@frubana/react-landbot";
// import styled from "styled-components";
import Iframe from "react-iframe";
import "./styling/Home.css";

// const LandbotContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   background: green;
// `;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   this.landbot = new window.LandbotFrameWidget({
  //     index: "https://landbot.io/u/H-421519-8FQ2CDN5JESSMYD0/index.html",
  //     container: ".landbot",
  //   });
  // }

  // componentWillUnmount() {
  //   this.landbot.destroy();
  // }

  logout() {
    myFirebase.auth().signOut();
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>You are logged in {user.email}!!!</h1>
        <button className="logout-btn" onClick={this.logout}>
          Logout
        </button>
        <Iframe
          url="https://landbot.io/u/H-421519-8FQ2CDN5JESSMYD0/index.html"
          width="450px"
          height="450px"
          id="myId"
          className="landbot"
          display="initial"
          position="relative"
        />
        {/* <LandbotContainer className="landbot" /> */}
        {/* <WrapperLandbot textLabel="Click to chat">
          <WrapperIframe
            name="unique_name"
            positionRigth="25%"
            positionBottom="31px"
            color="green"
            heigth="80%"
            width="100%"
            image={"you-image"}
            iframe={"https://landbot.io/u/H-421519-8FQ2CDN5JESSMYD0/index.html"}
          /> */}
        {/* <WrapperWhatsApp
            name="unique_name"
            color="blue"
            whatsapp={"link-to-WhatsApp"}
            image={"you-image"}
          /> */}
        {/* </WrapperLandbot> */}
      </div>
    );
  }
}
export default Home;
