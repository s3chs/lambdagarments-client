import React from "react";
import "../../Styles/Nav.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import ContactNav from "../../icons/ContactNav.png";
// import AboutNav from "../../icons/AboutNav.png";
// import ClothesNav from "../../icons/ClothesNav.png";
// import ThriftNav from "../../icons/ThriftNav.png";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 15px;
    font-family: "Permanent Marker", cursive;
    font-size: 18px;
  }

  h3 {
    color: black;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    h3 {
      color: white;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/clothes" style={{ textDecoration: "none" }}>
          <h3>Thrift</h3>
          {/* <img src={ClothesNav} alt="clothes"/> */}
        </Link>
      </li>
      <li>
        <Link to="/clothes" style={{ textDecoration: "none" }}>
          <h3>clothes</h3>
          {/* <img src={ClothesNav} alt="clothes"/> */}
        </Link>
      </li>
      {/* <li>
        {" "}
        <Link to="/clothes/add" style={{ textDecoration: "none" }}>
          <h3>Add Garm</h3>
        </Link>
      </li> */}
      <li>
        {" "}
        <Link style={{ textDecoration: "none" }}>
          <h3>About</h3>
          {/* <img src={AboutNav} alt="about"/> */}
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
