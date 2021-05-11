import React from "react";
import "../../Styles/Nav.css";
import styled from "styled-components";
import Burger from "./Burger";
import LambdaNav from "../../icons/LogoNav.png";

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  ${"" /* position: fixed; */}
  background-color: white;
  ${'' /* border-bottom: 1px solid black; */}

  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    max-width: 200px;
  }
`;

const NavMain = (props) => {
  return (
    <Nav>
      <div className="logo">
        <img src={LambdaNav} alt="navlogo" />
        {/* <h2>Lambda Garments</h2> */}
      </div>
      <Burger />
    </Nav>
  );
};

export default NavMain;
