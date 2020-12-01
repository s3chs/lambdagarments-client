import React, { Component } from "react";
import apiHandler from "../api/apiHandler";

export default class EditGarm extends Component {
  state = {
    images: [],
    name: "",
    size: "",
    brand: "",
    pittopit: "",
    coltobot: "",
    description: "",
  };

  componentDidMount() {
    apiHandler
      .getOne(this.props.match.params.id)
      .then((apiRes) => {
        //   console.log(apiRes)
        const garm = apiRes.data;
        this.setState({
          images: garm.images,
          name: garm.name,
          size: garm.size,
          brand: garm.brand,
          pittopit: garm.pittopit,
          coltobot: garm.coltobot,
          description: garm.description,
        });
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.updateClothes();
  };

  updateClothes = () =>
    apiHandler
      .updateOne("/clothes/" + this.props.match.params.id, this.state)
      .then(() => {
        this.props.history.push("/clothes");
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // console.log(name, value);

    this.setState({
      [name]: value,
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

  render() {
    console.log(this.state);
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

          <label>Second Picture</label>
          <input
            id="picOne"
            name="images"
            type="text"
            onChange={this.handleChangePicture}
          />
          <br />

          <label>Third Picture</label>
          <input
            id="picTwo"
            name="images"
            type="text"
            onChange={this.handleChangePicture}
          />

          <label>Name</label>
          <input
            value={this.state.name}
            name="name"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <label>Size</label>
          <input
            value={this.state.size}
            name="size"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <label>Brand</label>
          <input
            value={this.state.brand}
            name="brand"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <label>Pit to Pit</label>
          <input
            value={this.state.pittopit}
            name="pittopit"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <label>Collar to bottom</label>
          <input
            value={this.state.coltobot}
            name="coltobot"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <label>Description</label>
          <input
            value={this.state.description}
            name="description"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <button>UPDATE GARM!</button>
        </form>
      </div>
    );
  }
}
