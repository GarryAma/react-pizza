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
        placeholder="search order number #"
        onChange={(e) => setQuery(e.target.value)}
        className="border-1 border-white px-2 py-1/2 rounded-md"
      />
    </form>
  );
};

export default SearchOrder;
