import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiAuth from "../api/apiAuth";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    username: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    console.log(name);
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // const fd = new FormData();

    // fd.append("username", this.state.username);
    // fd.append("password", this.state.password);
    // fd.append("email", this.state.email);
    apiAuth.signup(this.state).then((res) => {
      this.props.history.push("/signin");
    });
  };

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <h2 className="title">Signup</h2>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>

        <label className="label" htmlFor="username">
          Username
        </label>
        <input
          className="input"
          type="text"
          name="username"
          id="username"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
        />

        <button className="btn">Submit</button>
        <p>
          Already have an account ?{" "}
          <Link className="link" to="/signin">
            Signin
          </Link>
        </p>
      </form>
    );
  }
}

export default Signup;
