import React from "react";

import Logo from "../../imgs/logo-no-container.png";
import "./index.css";
import { Link } from "react-router-dom";

export default function Header() {
  function extend() {
    var linkCtnr = document.getElementById("ctnr");
    var height = linkCtnr.style.height;

    if (height > "0px") {
      linkCtnr.style.height = "0px";
    } else {
      var screenWidth = linkCtnr.scrollHeight;
      console.log(screenWidth);

      linkCtnr.style.height = `${screenWidth}px`;
    }
  }

  function closeMenu() {
    if (window.innerWidth < 700) {
      document.getElementById("ctnr").style.height = "0px";
    }
  }

  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="header-logo" />

      <div className="header-links-container" id="ctnr">
        <Link to="/" className="header-links" onClick={() => closeMenu()}>
          Home
        </Link>
        <Link
          to="/products"
          className="header-links"
          onClick={() => closeMenu()}
        >
          Products
        </Link>
        <Link
          to="/location"
          className="header-links"
          onClick={() => closeMenu()}
        >
          Location
        </Link>
        <Link
          to="/services"
          className="header-links"
          onClick={() => closeMenu()}
        >
          Services
        </Link>
        <Link
          to="/booking"
          className="header-links"
          onClick={() => closeMenu()}
        >
          Book Now
        </Link>
      </div>
      <i className="fa-solid fa-bars" onClick={() => extend()}></i>
    </div>
  );
}
