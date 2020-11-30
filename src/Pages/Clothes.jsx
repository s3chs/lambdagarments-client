import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";

export default class Clothes extends Component {
  state = {
    clothes: [],
  };

  componentDidMount() {
    apiHandler
      .getAll("/clothes")
      .then((apiRes) => {
        // console.log(apiRes);
        this.setState({
          clothes: apiRes.data,
        });
        console.log(this.state.clothes);
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });
  }

  render() {
    return (
      <div>
        {this.state.clothes.map((garment) => (
          <div>
            <Link key={garment.name} to={`/clothes/${garment._id}`}>
              <img
                style={{ maxWidth: 130 }}
                src={garment.images[0]}
                alt="garm-pic"
              />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
