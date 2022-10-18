import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faAngular,
  faHtml5,
  faJs,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { useProjects } from "../../context/ProjectsContext";
import { projects } from "../../context/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const { myProjects } = useProjects();
  console.log(myProjects);

  return (
    <div className="projects-section">
      <div className="left-side">
        <div className="left-side-title">projects</div>
        <div className="categories">
          <div className="checkbox-container">
            <input className="category-input" type="checkbox" />
            <div className="category-name">
              <FontAwesomeIcon className="tech-icon" icon={faHtml5} />
              <p>HTML</p>
            </div>
          </div>
          <div className="checkbox-container">
            <input className="category-input " type="checkbox" />
            <div className="category-name">
              <FontAwesomeIcon className="tech-icon" icon={faCss3} />
              <p>CSS</p>
            </div>
          </div>
          <div className="checkbox-container">
            <input className="category-input " type="checkbox" />
            <div className="category-name">
              <FontAwesomeIcon className="tech-icon" icon={faJs} />
              <p>Javascript</p>
            </div>
          </div>
          <div className="checkbox-container">
            <input className="category-input " type="checkbox" />
            <div className="category-name">
              <FontAwesomeIcon className="tech-icon" icon={faReact} />
              <p>React</p>
            </div>
          </div>
          <div className="checkbox-container">
            <input className="category-input " type="checkbox" />
            <div className="category-name">
              <FontAwesomeIcon className="tech-icon" icon={faAngular} />
              <p>Angular</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-title">
          <p>React, Vue</p>
          <FontAwesomeIcon className="close-icon" icon={faXmark} />
        </div>
        <div className="projects-container">
          {myProjects.map((project, index) => (
            <ProjectCard
              key={index}
              projectNumber={index}
              imgSrc={project.projectPicture}
              projectName={project.projectName}
              projectLinks={project.projectLinks}
              projectDesc={project.projectDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
