import React from "react";
import PropTypes from "prop-types";

const Search = ({ search, onSearchChange, onSearch }) => {
  return (
    // Container
    <div className="flex justify-end mb-4">
      
      {/* Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="p-2 w-1/3 border rounded-l-md"
      />

      {/* Button */}
      <button 
        onClick={onSearch}
        className="bg-gray-800 text-white px-4 py-2 rounded-r-md"
      >
        <i className="fas fa-search"></i>
      </button>
      
    </div>
  );
};

// Props
Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired, 
};

export default Search;
