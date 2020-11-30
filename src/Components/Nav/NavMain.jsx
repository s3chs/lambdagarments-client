import React from "react";
import "../../Styles/Nav.css";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
  }
`;

const NavMain = () => {
  return (
    <Nav>
      <div className="logo">
      
        <h2>Lambda Garments</h2>
      </div>
      <Burger />
    </Nav>
  );
};

export default NavMain;
