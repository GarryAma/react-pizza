import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="text-green-900 text-sm
  hover:text-green-700 transition-all duration-300"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
