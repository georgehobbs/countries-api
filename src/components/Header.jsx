import React from "react";

function Header() {
 
  function clickTitle() {
    document.location.href = `/`;
  }

  return (
    <div className="container-fluid header">
      <div className="row">
        <div className="col">
          <h1 className="title" onClick={clickTitle}>Where in the world?</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
