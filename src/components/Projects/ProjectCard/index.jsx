import "./index.scss";
import React from "react";
import img from "../../../assets/apptodoist.jpeg";

function ProjectCard({
  imgSrc,
  projectName,
  projectLinks,
  projectNumber,
  projectDesc,
}) {
  return (
    <div className="project-card-container">
      <div className="project-card-header">
        <p>
          Project {projectNumber + 1} <span>// _{projectName}</span>
        </p>
      </div>
      <div className="project-card">
        <div className="project-image">
          {/* <img src={`../../${imgSrc}`} alt="" /> */}
          <img src={img} alt="" />
        </div>
        <div className="project-details">
          <p className="project-desc-text">{projectDesc}</p>
          <div className="project-links">
            <a
              target="_blank"
              className="project-link"
              href={projectLinks.githubLink}
            >
              github-link
            </a>
            <a
              target="_blank"
              className="project-link"
              href={projectLinks.liveLink}
            >
              live-link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
