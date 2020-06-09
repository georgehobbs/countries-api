import React, { useState } from "react";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function onFormSubmit(searchTerm) {
    props.onSearchChange(searchTerm);
  }

  function onFormChange(e) {
    setSearchTerm(e.target.value);
    onFormSubmit(e.target.value.toLowerCase());
  }

  return (
    <div className="search-bar">
      <div className="col">
        <form onSubmit={onFormSubmit}>
          <i className="magnify" class="fas fa-search"></i>
          <input
            value={searchTerm}
            onChange={onFormChange} 
            className="country-search"
            placeholder="Search for a country..."
          ></input>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
