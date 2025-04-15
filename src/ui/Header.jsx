import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header style={{ border: "1px solid black" }}>
      <Link to={"/"}>React-Pizza</Link>
      <SearchOrder />
      <p>Garry ⚡️</p>
    </header>
  );
};

export default Header;
