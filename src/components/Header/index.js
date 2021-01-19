import React from "react";

import logo from "../../images/marvel-logo.png";
import "./Header.scss";

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Header;
