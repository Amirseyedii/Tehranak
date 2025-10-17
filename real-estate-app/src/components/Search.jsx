import React from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search House"
        className="search-input"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;