import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
      />
      <button className="search-icon">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
