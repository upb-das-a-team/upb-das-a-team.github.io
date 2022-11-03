import React from "react";

import './Navbar.scss';

import Logo from '../../Assets/Images/logo-no-background.png';

function Navbar() {
  return(
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
          <div className="container">
            <a href="/">
              <img className="navbar-logo" src={Logo} alt="Das A Team Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="">Home</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">Projekt</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Entwicklung</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Team</a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar;
