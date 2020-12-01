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

    // FORM DATA FOR CLOUDINARY //

    // const fd = new FormData();
    // fd.append("images", this.state.images);
    // fd.append("name", this.state.name);
    // fd.append("size", this.state.size);
    // fd.append("brand", this.state.brand);
    // fd.append("pittopit", this.state.pittopit);
    // fd.append("coltobot", this.state.coltobot);
    // fd.append("description", this.state.description);

    ////

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
    const copy = [...this.state.images];
    const value = event.target.value;

    if (event.target.id === "picZero") {
      copy[0] = value;
      this.setState({
        images: copy,
      });
      console.log(copy, "first copy");
    } else if (event.target.id === "picOne") {
      copy[1] = value;
      this.setState({
        images: [...copy],
      });
      console.log(copy, "second copy");
    } else if (event.target.id === "picTwo") {
      copy[2] = value;
      this.setState({
        images: [...copy],
      });
      console.log(copy, "final copy");
    } else {
      console.log("somethings wrong dawg");
    }
    console.log(this.state.images);
  };

  // /CLOUDINARY SETUP/////
  // handleChangePicture = (event) => {
  //   const value = event.target.files;

  //   this.setState({
  //     images: value,
  //   });
  //   console.log(this.state.images);
  // };

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
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
