import React from "react";
import { AuthContext } from "./AuthContext";

const withAuth = (ComponentToPassPropsTo) => {
  return (props) => {
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          return (
            <ComponentToPassPropsTo {...props} authContext={authContext} />
          );
        }}
      </AuthContext.Consumer>
    );
  };
};

export default withAuth;
