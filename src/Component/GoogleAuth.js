import React, { Component } from "react";

class GoogleAuth extends Component {
  componentDidMount() {
    window.GamepadHapticActuator.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "434556555139 - i3e4lo784755deaugvktqvtm4fi4v1re.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }
  render() {
    return <div></div>;
  }
}

export { GoogleAuth };
