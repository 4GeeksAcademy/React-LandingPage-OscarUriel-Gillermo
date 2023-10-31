import React from "react";

const navBarStyles = {
  backgroundColor: "rgba(0, 0, 0, 0.8)", 
};

export const NavBar = () =>{
    return(
      <nav className="navbar navbar-expand-lg navbar-dark " style={navBarStyles}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold">Start BootsTrap</a>
        <div className="d-flex">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand fs-6" href="#">Home</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-secondary" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-secondary" aria-current="page" href="#">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-secondary" aria-current="page" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
    
}

export default NavBar;