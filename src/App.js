//brings in all middleware and mainware
import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";

import MainRouter from "./MainRouter";

import "./App.css";

export class App extends Component {
  state = {
    user: null,
  };
//grabs token from local storage and checks if it has expired
  componentDidMount() {
    let getJwtToken = window.localStorage.getItem("jwtToken");

    if (getJwtToken) {
      const currentTime = Date.now() / 1000;

      let decodedJWTToken = jwtDecode(getJwtToken);

      if (decodedJWTToken.exp < currentTime) {
        //logout
        this.handleUserLogout();
      } else {
        //login
        this.handleUserLogin(decodedJWTToken);
      }

      // console.log("currentTime", currentTime);
      // June XXXX xxpm- 1624985322
      // ONE DAY FROM June XXXX xxpm - 1625071722
      // Current Time - 163500000
      // console.log("decodedJWTToken", decodedJWTToken);
    }
  }
//sets state with user email for login
  handleUserLogin = (user) => {
    this.setState({
      user: {
        email: user.email,
      },
    });
  };
//handles user logout and removes token from local storage
  handleUserLogout = () => {
    window.localStorage.removeItem("jwtToken");
    this.setState({
      user: null,
    });
  };

  render() {
    return (
      <>
        {/* sets toastcontainer component */}
        <ToastContainer position="top-center" />
        {/* sets mainrouter component and brings in states for user, login and log out */}
        <MainRouter
          user={this.state.user}
          handleUserLogin={this.handleUserLogin}
          handleUserLogout={this.handleUserLogout}
        />
      </>
    );
  }
}

export default App;
