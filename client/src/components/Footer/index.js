import React from "react";

import "./index.css";
import Logo from "../../imgs/logo-no-container.png";
export default function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={Logo} alt="logo" className="footer-logo" />
      </div>
      <div className="footer-copyright">&copy;Stelar Snips</div>
    </div>
  );
}
