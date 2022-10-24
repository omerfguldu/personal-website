import "./index.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faAngular,
  faHtml5,
  faJs,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

function ProjectCategories({ categories }) {
  return (
    <div className="project-categories-container">
      {categories.map((category, index) => {
        switch (category) {
          case "React":
            return (
              <FontAwesomeIcon
                className="category-icon react-icon"
                key={index}
                icon={faReact}
              />
            );
            break;
          case "Angular":
            return (
              <FontAwesomeIcon
                className="category-icon angular-icon"
                key={index}
                icon={faAngular}
              />
            );
            break;
          case "Html5":
            return (
              <FontAwesomeIcon
                className="category-icon html-icon"
                key={index}
                icon={faHtml5}
              />
            );
            break;
          case "Javascript":
            return (
              <FontAwesomeIcon
                className="category-icon javascript-icon"
                key={index}
                icon={faJs}
              />
            );
            break;
          default:
            return (
              <FontAwesomeIcon
                className="category-icon css-icon"
                key={index}
                icon={faCss3}
              />
            );
            break;
        }
      })}
    </div>
  );
}

export default ProjectCategories;
