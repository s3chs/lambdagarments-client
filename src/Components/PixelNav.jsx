import React from "react";

import AfterNavOne from "../icons/PixelArt.png";
import AfterNavTwo from "../icons/lambdaneontrois.png";
import AfterNavThree from "../icons/lambdaneondeux.png";
import "../Styles/PixelNav.css";

const PixelNav = () => {
  return (
    <div className="pixel-nav-flex">
      <img
        className="garment-nav"
        src="https://res.cloudinary.com/dncemocxu/image/upload/v1609764902/Lambda%20Garments/backgorundlambdanumerouno_axahki.png"
        alt="garment-nav"
      />
        <img
        className="garment-nav"
        src="https://res.cloudinary.com/dncemocxu/image/upload/v1609764902/Lambda%20Garments/backgorundlambdanumerouno_axahki.png"
        alt="garment-nav"
      />
      {/* <img
        className="garment-nav"
        src="https://res.cloudinary.com/dncemocxu/image/upload/v1609764902/Lambda%20Garments/backgorundlambdanumerodos_vvqe8n.png"
        alt="garment-nav"
      /> */}
      {/* <img className="pixel-nav-one" src={AfterNavOne} alt="Pixel-nav"/> */}
      {/* <img className="pixel-nav-two" src={AfterNavTwo} alt="Pixel-nav"/> */}
      {/* <img className="pixel-nav-one" src={AfterNavThree} alt="Pixel-nav"/> */}
    </div>
  );
};

export default PixelNav;
