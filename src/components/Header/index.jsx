import { NavLink } from "react-router-dom";

import "./index.scss";

import React from "react";

function Header() {
  return (
    <div className="header-container">
      <div>omer-faruk-guldu</div>
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
        <p className="sliding-text">THE SITE IS STILL IN PROGRESS...</p>
      </div>
      <NavLink exact="true" className="nav-link contact-link" to="/contact">
        _contact-me
      </NavLink>
    </div>
  );
}

export default Header;
