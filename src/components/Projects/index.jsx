import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faVuejs,
  faHtml5,
  faJs,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";
import { useProjects } from "../../context/ProjectsContext";
import { projects } from "../../context/projects";

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
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-title">
          <p>React, Vue</p>
        </div>
        <div className="projects-container">
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
        </div>
      </div>
    </div>
  );
}

export default Projects;
