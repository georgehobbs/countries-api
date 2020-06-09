import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function RegionFilter(props) {

  function regionSelected(e) {
    props.updateRegion(e.target.innerHTML);
  }

  return (
    <div className="col region-filter">
      <DropdownButton
        className="dropdown"
        id="region-filter-button"
        title={props.selectedRegion !== "All" ? props.selectedRegion : "Filter by Region"}
      >
        <Dropdown.Item onClick={regionSelected}>All</Dropdown.Item>
        <Dropdown.Item onClick={regionSelected}>Africa</Dropdown.Item>
        <Dropdown.Item onClick={regionSelected}>Americas</Dropdown.Item>
        <Dropdown.Item onClick={regionSelected}>Asia</Dropdown.Item>
        <Dropdown.Item onClick={regionSelected}>Europe</Dropdown.Item>
        <Dropdown.Item onClick={regionSelected}>Oceania</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default RegionFilter;
