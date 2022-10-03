import "./index.scss";

import React from "react";

function ProjectCard() {
  return (
    <div className="project-card">
      <div className="project-image">
        <img
          src="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="project-details">
        <p>Lorem ipsum dolor sit.</p>
        <a className="project-link" href="#">
          view project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
