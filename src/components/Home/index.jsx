import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

import React from "react";

function Home() {
  return (
    <div className="home-container">
      <div className="info-container">
        <div className="top-texts">
          <p className="p-300">Hi all. I am</p>
          <p className="headline">Omer Faruk Guldu</p>
          <p className="subheadline title-text">{">"} Front-end developer</p>
        </div>
        <div className="bottom-texts">
          <p className="comment-line">
            // you can also see it on my Github page
          </p>
          <p>
            <span className="const">const</span>{" "}
            <span className="githubLink">githubLink</span> ={" "}
            <a
              className="github"
              target="_blank"
              href="https://github.com/omerfguldu"
            >
              "https://github.com/omerfguldu"
            </a>
          </p>
        </div>
      </div>
      <div className="cube-container">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#dd0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
          </div>
        </div>
        <div className="effect green-effect"></div>
        <div className="effect blue-effect"></div>
      </div>
    </div>
  );
}

export default Home;
