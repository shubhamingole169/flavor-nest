import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value.trim();
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar-input"
        aria-label="Search recipes"
      />
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="search-bar-filter"
        aria-label="Filter by category"
      >
        <option value="">All Categories</option>
        <option value="Dessert">Dessert</option>
        <option value="Main Course">Main Course</option>
        <option value="Breakfast">Breakfast</option>
      </select>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired
};

export default SearchBar;