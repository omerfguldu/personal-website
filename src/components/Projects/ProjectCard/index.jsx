import "./index.scss";
import React from "react";
import todoImg from "../../../assets/apptodoist.jpeg";
import restavoImg from "../../../assets/restavo.jpg";

function ProjectCard({
  index,
  projectName,
  projectLinks,
  projectNumber,
  projectDesc,
}) {
  const projectImages = [todoImg, restavoImg];
  return (
    <div className="project-card-container">
      <div className="project-card-header">
        <p>
          Project {projectNumber + 1} <span>// _{projectName}</span>
        </p>
      </div>
      <div className="project-card">
        <div className="project-image">
          <img src={projectImages[index]} alt="" />
        </div>
        <div className="project-details">
          <p className="project-desc-text">{projectDesc}</p>
          <div className="project-links">
            <a
              target="_blank"
              className="project-link primary-button"
              href={projectLinks.githubLink}
            >
              github-link
            </a>
            <a
              target="_blank"
              className="project-link primary-button"
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
