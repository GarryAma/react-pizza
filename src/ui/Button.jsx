import React from "react";

const Button = ({ children, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className="bg-green-500 uppercase text-white py-2 px-3 tracking-wide rounded-full hover:bg-green-400 cursor-pointer transition-all duration-300 focus:outline-none disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default Button;
