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
  const [checkedHtml, setCheckedHtml] = useState({
    ctgName: "Html5",
    checked: true,
  });
  const [checkedCss, setCheckedCss] = useState({
    ctgName: "Css3",
    checked: true,
  });
  const [checkedJs, setCheckedJs] = useState({
    ctgName: "Javascript",
    checked: true,
  });
  const [checkedAngular, setCheckedAngular] = useState({
    ctgName: "Angular",
    checked: true,
  });
  const [checkedReact, setCheckedReact] = useState({
    ctgName: "React",
    checked: true,
  });
  const checkedCategories = [
    checkedHtml,
    checkedCss,
    checkedJs,
    checkedAngular,
    checkedReact,
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
              defaultChecked={checkedHtml.checked}
              onChange={() =>
                setCheckedHtml({
                  ctgName: "Html5",
                  checked: !checkedHtml.checked,
                })
              }
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
              defaultChecked={checkedCss.checked}
              onChange={() =>
                setCheckedCss({
                  ctgName: "Css3",
                  checked: !checkedCss.checked,
                })
              }
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
              defaultChecked={checkedJs.checked}
              onChange={() =>
                setCheckedJs({
                  ctgName: "Javascript",
                  checked: !checkedJs.checked,
                })
              }
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
              defaultChecked={checkedReact.checked}
              onChange={() =>
                setCheckedReact({
                  ctgName: "React",
                  checked: !checkedReact.checked,
                })
              }
            />
            <div className="category-name">
              <FontAwesomeIcon className="tech-icon" icon={faReact} />
              <p>React</p>
            </div>
          </div>
          <div className="checkbox-container">
            <input
              className="category-input "
              type="checkbox"
              defaultChecked={checkedAngular.checked}
              onChange={() =>
                setCheckedAngular({
                  ctgName: "Angular",
                  checked: !checkedAngular.checked,
                })
              }
            />
            <div className="category-name">
              <FontAwesomeIcon className="tech-icon" icon={faAngular} />
              <p>Angular</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-title">
          <div className="title-categories">
            {checkedCategories.map((category, index) => {
              return (
                <p
                  key={index}
                  style={{ display: category.checked ? "inherit" : "none" }}
                >
                  {category.checked ? category.ctgName : ""}
                  {index !== checkedCategories.length - 1 ? "," : ""}
                </p>
              );
            })}
          </div>
          {/* <p>React, Css</p> */}
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
