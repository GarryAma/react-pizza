import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        value={query}
        placeholder="search order number #"
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full px-3 py-1 text-sm bg-white text-stone-600 placeholder:text-stone-400 w-44 sm:w-64 focus:w-48 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-300 placeholder:text-xs"
      />
    </form>
  );
};

export default SearchOrder;
