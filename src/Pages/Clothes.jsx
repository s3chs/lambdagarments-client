import React, { Component, Image } from "react";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";
import "../Styles/Clothes.css";
import AfterNavTwo from '../icons/lambdaneontrois.png'

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
        {/* <p className="lambda-adjustments">λ λ λ</p> */}
        
        <div className="flex-title">
        <img src={AfterNavTwo} alt="dawg" className="boy"/>
         
        </div>
        {/* <p className="lambda-adjustments">λ λ λ</p> */}
        <div className="grid-container">
          {this.state.clothes.map((garment) => (
            <div className="card">
              <Link
                key={garment.name}
                to={`/clothes/${garment._id}`}
                className="column-container"
              >
                <img
                  className="garm-pic"
                  src={garment.images[0]}
                  alt="garm-pic"
                />
                <p className="clothes-text"> {garment.name} </p>

                <p className="clothes-text"> Size: {garment.size}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
