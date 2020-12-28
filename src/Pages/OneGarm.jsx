import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";
import WithAuth from "../Auth/WithAuth";
import InstaIcon from "../icons/instagram-icon-white-on-black-circle.png";
// import MailIcon from "../icons/mail.png";

import "../Styles/OneGarm.css";

class OneGarm extends Component {
  state = {
    clothes: null,
  };

  componentDidMount() {
    // console.log(this.props);
    console.log(this.props.authContext);
    apiHandler
      .getOne(this.props.match.params.id)
      .then((apiResponse) => {
        // console.log(apiResponse.data);
        this.setState({ clothes: apiResponse.data });
      })
      .catch((error) => console.log(error));
  }

  deleteClothes = () => {
    apiHandler
      .deleteOne("/clothes/" + this.props.match.params.id, this.state)
      .then(() => {
        this.props.history.push("/clothes");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    // const { context } = this.props;
    // console.log(this.props.authContext);

    return (
      <div>
        {this.state.clothes && (
          <div className="one-garm-flex">
            <div className="garm-pics">
              <img
                src={this.state.clothes.images[0]}
                alt="garm-pic"
                className="one-garm-pic"
              />
              <img
                src={this.state.clothes.images[1]}
                alt="garm-pic"
                className="one-garm-pic"
              />

              {this.state.clothes.images[2] && (
                <>
                  <img
                    src={this.state.clothes.images[2]}
                    className="one-garm-pic"
                    alt="garm-pic"
                  />
                </>
              )}
            </div>

            <div className="position-fixed">
              <div className="garm-info">
                <p>λ λ λ λ λ λ</p>
                <br />
                <br />
                <h2>{this.state.clothes.name} </h2>
                <h3>Brand: {this.state.clothes.brand} </h3>
                <h3>Size: {this.state.clothes.size} </h3>
                <h3>{this.state.clothes.description} </h3>
                <br />
                <h3 className="measurements">Measurements</h3>
                <h3>Pit to pit: {this.state.clothes.pittopit} </h3>
                <h3>Collar to Bottom: {this.state.clothes.coltobot} </h3>
                <br />
                <br />
                <p>λ λ λ λ λ λ</p>
                <br />
                <a href="https://www.instagram.com/lambdagarments/">
                  <img
                    className="social-icon"
                    src={InstaIcon}
                    alt="instagram-icon"
                  />
                </a>
                {/* <Link>
                  <img
                    className="social-icon"
                    src={MailIcon}
                    alt="mail-icon"
                  />
                </Link> */}
              </div>
            </div>

            {this.props.authContext.user && (
              <>
                {" "}
                <Link to={`/clothes/${this.state.clothes._id}/edit`}>EDIT</Link>
                <button onClick={this.deleteClothes}> DELETE</button>{" "}
              </>
            )}
            {/* <Link to={`/clothes/${this.state.clothes._id}/edit`}>EDIT</Link>
            <button onClick={this.deleteClothes}> DELETE</button> */}
          </div>
        )}
      </div>
    );
  }
}
export default WithAuth(OneGarm);
