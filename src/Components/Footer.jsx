import React from "react";
import InstaIcon from "../icons/instagram-icon-white-on-black-circle.png";
import MailIcon from "../icons/maillogo.png";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h5>Lambda Garments</h5>
      <div className="icons">
        <a href="https://www.instagram.com/lambdagarments/">
          <img className="footer-icon" src={InstaIcon} alt="instagram-icon" />
        </a>
        <a href="mailto:lambdagarments@gmail.com">
          <img className="footer-icon" src={MailIcon} alt="instagram-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
