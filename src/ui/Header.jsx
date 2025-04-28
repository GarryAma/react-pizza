import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="bg-gradient-to-l from-green-600 via-green-500 to-green-400 uppercase px-4 py-3 sm:px-6 flex justify-between text-white items-center transition-all duration-700">
      <Link to={"/"} className="tracking-[8px]">
        React-Pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
