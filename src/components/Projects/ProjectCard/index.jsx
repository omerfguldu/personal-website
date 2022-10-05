import "./index.scss";
import React from "react";
import img from "../../../assets/apptodoist.jpeg";

function ProjectCard({ imgSrc, projectName, projectLinks }) {
  return (
    <div className="project-card">
      <div className="project-image">
        {/* <img src={`../../${imgSrc}`} alt="" /> */}
        <img src={img} alt="" />
      </div>
      <div className="project-details">
        <p>{projectName}</p>
        <a
          target="_blank"
          className="project-link"
          href={projectLinks.githubLink}
        >
          view project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
