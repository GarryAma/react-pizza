import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();
  const className =
    "text-green-900 text-sm hover:text-green-700 transition-all duration-300 cursor-pointer";

  if (to === "-1") {
    return (
      <button onClick={() => navigate(-1)} className={className}>
        &larr; Go back
      </button>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
