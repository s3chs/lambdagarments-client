import React, { Component } from "react";
import apiHandler from "../api/apiHandler";

export default class AddGarm extends Component {
  state = {
    images: [],
    name: "",
    size: "",
    brand: "",
    pittopit: "",
    coltobot: "",
    description: "",
    isChecked: false,
    isCheckedTwo: false,
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // console.log(name, value);

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .createGarm("/clothes", this.state)
      .then((apiRes) => {
        // console.log(apiRes);
        this.props.history.push("/clothes");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  handleChecked = (event) => {
    // console.log(event.target.checked);
    const value = event.target.checked;

    this.setState({
      isChecked: value,
    });
  };

  handleCheckedTwo = (event) => {
    // console.log(event.target.checked);
    const value = event.target.checked;

    this.setState({
      isCheckedTwo: value,
    });
  };

  handleChangePicture = (event) => {
    const value = event.target.value;

    if (event.target.id === "picZero") {
      this.state.images[0] = value;
    } else if (event.target.id === "picOne") {
      this.state.images[1] = value;
    } else if (event.target.id === "picTwo") {
      this.state.images[2] = value;
    } else {
      this.state.images = [];
    }

    console.log(this.state.images);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>First Picture</label>
          <input
            id="picZero"
            name="images"
            type="text"
            onChange={this.handleChangePicture}
          />
          <br />

          <label>Add a second picture</label>
          <input onChange={this.handleChecked} type="checkbox" />
          <label>Add a third picture</label>
          <input onChange={this.handleCheckedTwo} type="checkbox" />
          <br />

          {this.state.isChecked === true && (
            <React.Fragment>
              <label>Second Picture</label>
              <input
                id="picOne"
                name="images"
                type="text"
                onChange={this.handleChangePicture}
              />
              <br />
            </React.Fragment>
          )}
          {this.state.isCheckedTwo === true && (
            <React.Fragment>
              <label>Third Picture</label>
              <input
                id="picTwo"
                name="images"
                type="text"
                onChange={this.handleChangePicture}
              />
              <br />
            </React.Fragment>
          )}
          <label>Name</label>
          <input name="name" type="text" onChange={this.handleChange} />
          <br />
          <label>Size</label>
          <input name="size" type="text" onChange={this.handleChange} />
          <br />
          <label>Brand</label>
          <input name="brand" type="text" onChange={this.handleChange} />
          <br />
          <label>Pit to Pit</label>
          <input name="pittopit" type="text" onChange={this.handleChange} />
          <br />
          <label>Collar to bottom</label>
          <input name="coltobot" type="text" onChange={this.handleChange} />
          <br />
          <label>Description</label>
          <input name="description" type="text" onChange={this.handleChange} />
          <br />
          <button>CREATE GARM!</button>
        </form>
      </div>
    );
  }
}
