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
        <div className="col dark-mode">
          <i className="far fa-moon fa-xs moon-icon"></i>
          <p className="dark-mode-text">Dark Mode</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
