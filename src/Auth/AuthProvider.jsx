import React, { Component } from "react";
import { AuthContext } from "./AuthContext";
import apiAuth from "../api/apiAuth";

class AuthProvider extends Component {
  state = {
    user: null,
    error: null,
    isLoading: true,
  };

  componentDidMount() {
    apiAuth
      .isLoggedIn()
      .then((data) => {
        console.log(data, "c la data")
        this.setState({ user: data, isLoading: false });
      })
      .catch(() => {
        this.setState({
          user: null,
          error: "There was an error on the authentication",
          isLoading: false,
        });
      });
  }

  logoutUser = () => {
    apiAuth.logout().then(() => {
      this.setState({ user: null });
    });
  };

  setUser = (user) => {
    this.setState({ user: user });
  };

  render() {
    console.log(this.state)
    return (
      <AuthContext.Provider
        value={{
          user: this.state.user,
          setUser: this.setUser,
          logoutUser: this.logoutUser,
          isLoading: this.state.isLoading,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
