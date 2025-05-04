import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, disabled = false, to, type }) => {
  const style = {
    primary:
      "bg-green-500 outline outline-green-500 uppercase text-white py-2 px-3 tracking-wide rounded-full hover:bg-green-400 cursor-pointer transition-all duration-300 focus:outline-none disabled:cursor-not-allowed text-sm",
    secondary:
      "uppercase text-stone-700 py-2 px-3 tracking-wide rounded-full hover:bg-red-400 cursor-pointer transition-all duration-300 focus:outline-none disabled:cursor-not-allowed outline outline-red-400 hover:text-white text-sm",
  };

  if (to) {
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
};

export default Button;
