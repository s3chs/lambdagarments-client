import React from 'react'
import withAuth from "../Auth/WithAuth";

const Home = (props) => {
    // console.log(props.authContext)
    return (
        <div>
        <h3>Welcome to Lambda Garments</h3>
        {props.authContext.user && (
          <>
           
            <p
              onClick={props.authContext.logoutUser}
              style={{ display: "inline" }}
            >
              Logout
            </p>
          </>
        )}
        </div>
    )
}

export default withAuth(Home)
