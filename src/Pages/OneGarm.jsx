import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";
import WithAuth from "../Auth/WithAuth";

class OneGarm extends Component {
  state = {
    clothes: null,
    index: 0,
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
    const { context } = this.props;
    console.log(this.props.authContext);

    return (
      <div>
        {this.state.clothes && (
          <React.Fragment>
            <img
              src={this.state.clothes.images[this.state.index]}
              alt="garm-pic"
            />
            {this.props.authContext.user && (
              <>
                {" "}
                <Link to={`/clothes/${this.state.clothes._id}/edit`}>EDIT</Link>
                <button onClick={this.deleteClothes}> DELETE</button>{" "}
              </>
            )}
            {/* <Link to={`/clothes/${this.state.clothes._id}/edit`}>EDIT</Link>
            <button onClick={this.deleteClothes}> DELETE</button> */}
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default WithAuth(OneGarm);
