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
import ProjectCard from "./ProjectCard";
import { useState } from "react";

function Projects() {
  const { myProjects } = useProjects();
  const [checkedHtml, setCheckedHtml] = useState(false);
  const [checkedCss, setCheckedCss] = useState(false);
  const [checkedJs, setCheckedJs] = useState(false);
  const [checkedAngular, setCheckedAngular] = useState(false);
  const [checkedReact, setCheckedReact] = useState(false);
  const checkedCategories = [
    { html: checkedHtml },
    { css: checkedCss },
    { js: checkedJs },
    { angular: checkedAngular },
    { react: checkedReact },
  ];
  console.log(checkedCategories);

  return (
    <div className="projects-section">
      <div className="left-side">
        <div className="left-side-title">projects</div>
        <div className="categories">
          <div className="checkbox-container">
            <input
              className="category-input"
              type="checkbox"
              defaultChecked={checkedHtml}
              onChange={() => setCheckedHtml(!checkedHtml)}
              value={"HTML"}
            />
            <div className="category-name">
              <FontAwesomeIcon className="tech-icon" icon={faHtml5} />
              <p>HTML</p>
            </div>
          </div>
          <div className="checkbox-container">
            <input
              className="category-input "
              type="checkbox"
              onChange={() => setCheckedCss(!checkedCss)}
            />
            <div className="category-name">
              <FontAwesomeIcon className="tech-icon" icon={faCss3} />
              <p>CSS</p>
            </div>
          </div>
          <div className="checkbox-container">
            <input
              className="category-input "
              type="checkbox"
              onChange={() => setCheckedJs(!checkedJs)}
            />
            <div className="category-name">
              <FontAwesomeIcon className="tech-icon" icon={faJs} />
              <p>Javascript</p>
            </div>
          </div>
          <div className="checkbox-container">
            <input
              className="category-input "
              type="checkbox"
              onChange={() => setCheckedReact(!checkedReact)}
            />
            <div className="category-name">
              <FontAwesomeIcon className="tech-icon" icon={faReact} />
              <p>React</p>
            </div>
          </div>
          <div className="checkbox-container">
            <input className="category-input " type="checkbox" />
            <div className="category-name">
              <FontAwesomeIcon
                className="tech-icon"
                icon={faAngular}
                onChange={() => setCheckedAngular(!checkedAngular)}
              />
              <p>Angular</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-title">
          {/* <div className="title-categories">
            {checkedCategories.map((category, index) => (
              <p key={index}>{category}</p>
            ))}
          </div> */}
          <p>React, Css</p>
          <FontAwesomeIcon className="close-icon" icon={faXmark} />
        </div>
        <div className="projects-container">
          {myProjects.map((project, index) => (
            <ProjectCard
              key={index}
              projectNumber={index}
              index={index}
              projectName={project.projectName}
              projectLinks={project.projectLinks}
              projectDesc={project.projectDescription}
              projectCategories={project.projectCategories}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
