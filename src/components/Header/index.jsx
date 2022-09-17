import { NavLink } from "react-router-dom";

import "./index.scss";

import React from "react";

function Header() {
  return (
    <div className="header-container">
      <div className="header-title">
        <p>omer-faruk-guldu</p>
        <div className="hamburger-menu">
          <input type="checkbox" />
          <div className="line hamburger-top"></div>
          <div className="line hamburger-middle"></div>
          <div className="line hamburger-bottom"></div>
        </div>
      </div>
      <NavLink exact="true" className="nav-link hello-link" to="/" end>
        _hello
      </NavLink>
      <NavLink exact="true" className="nav-link about-link" to="about">
        _about-me
      </NavLink>
      <NavLink exact="true" className="nav-link projects-link" to="/projects">
        _projects
      </NavLink>
      <div className="slider-container">
        <p className="sliding-text">THE SITE IS STILL UNDER CONSTRUCTION...</p>
      </div>
      <NavLink exact="true" className="nav-link contact-link" to="/contact">
        _contact-me
      </NavLink>
    </div>
  );
}

export default Header;
