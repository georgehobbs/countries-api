import React from "react";
import SearchBar from "./SearchBar";
import RegionFilter from "./RegionFilter";

function Filters(props) {
  return (
    <div className="container-fluid filters">
      <div className="row">
        <div className="col-md-6">
          <SearchBar onSearchChange={props.onSearchChange}/>
        </div>
        <div className="col-md-6">
          <RegionFilter updateRegion={props.updateRegion} selectedRegion={props.selectedRegion} />
        </div>
      </div>
    </div>
  );
}

export default Filters;
