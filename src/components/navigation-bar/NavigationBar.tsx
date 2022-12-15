import React from "react";
import { useState } from "react";

import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/logo/logo-icon-bg-white.svg';

import './NavigationBar.scss';

function handleCollapse() {
  var navbarToggler = document.getElementById('navbar-toggler')
  var navbarTogglerClassList = navbarToggler?.classList

  var navbarNav = document.getElementById('navbarNav')
  var navbarNavClassList = navbarNav?.classList;

  navbarTogglerClassList?.add('collapsed')
  navbarToggler?.setAttribute('aria-expanded', 'false')
  
  navbarNavClassList?.remove('show')
}

function NavigationBar() {
  const [currentLocation, setCurrentLocation] = useState(window.location.pathname);
  useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={'/'}>
          <img className="navbar-brand navbar-brand-image" src={Logo} alt="Das A Team Logo" />
        </Link>
        <button id="navbar-toggler" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={"nav-item " + (window.location.pathname === '/' ? "activated" : "")} onClick={handleCollapse}>
              <Link className="nav-link" to={'/'}>HOME</Link>
            </li>
            <span className="navbar-nav--divider"></span>
            <li className={"nav-item " + (window.location.pathname === '/project' ? "activated" : "")} onClick={handleCollapse}>
              <Link className="nav-link" to={'/project'}>PROJECT</Link>
            </li>
            <span className="navbar-nav--divider"></span>
            <li className={"nav-item " + (window.location.pathname === '/team' ? "activated" : "")} onClick={handleCollapse}>
              <Link className="nav-link" to={'/team'}>TEAM</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar;
