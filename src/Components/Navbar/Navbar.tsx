import React from "react";

import './Navbar.scss';

import Logo from '../../assets/logos/logo-no-background.png'

function Navbar() {
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/">
          <img className="navbar-logo" src={Logo} alt="das-a-team-logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="http://localhost:3000/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/project">Project</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/team">Team</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
