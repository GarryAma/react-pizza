import React from "react";

const Loader = () => {
  return (
    <div className="absolute bg-slate-200/20 w-full h-full backdrop-blur-xs flex justify-center items-center">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
