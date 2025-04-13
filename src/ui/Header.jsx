import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>React-Pizza</Link>
      <p>Garry ⚡️</p>
    </header>
  );
};

export default Header;
