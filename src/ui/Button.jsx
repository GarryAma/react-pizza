import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, disabled = false, to, type, onclick }) => {
  const style = {
    primary:
      "bg-green-500 outline outline-green-500 uppercase text-white py-2 px-3 tracking-wide rounded-full hover:bg-green-400 cursor-pointer transition-all duration-300 disabled:cursor-not-allowed text-sm",
    secondary:
      "uppercase text-stone-700 py-2 px-3 tracking-wide rounded-full hover:bg-red-400 cursor-pointer transition-all duration-300  disabled:cursor-not-allowed outline outline-red-400 hover:text-white text-sm",
    round:
      "bg-green-500 outline outline-green-500 text-white py-1 px-1  rounded-full hover:bg-green-400 cursor-pointer transition-all duration-300 text-sm w-[28px] h-[28px]",
  };

  if (to) {
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  }

  if (onclick) {
    return (
      <button disabled={disabled} className={style[type]} onClick={onclick}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
};

export default Button;
