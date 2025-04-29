import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, disabled = false, to }) => {
  const className =
    "bg-green-500 uppercase text-white py-2 px-3 tracking-wide rounded-full hover:bg-green-400 cursor-pointer transition-all duration-300 focus:outline-none disabled:cursor-not-allowed";
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
