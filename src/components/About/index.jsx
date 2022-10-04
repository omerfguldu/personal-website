import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faXmark,
  faEnvelope,
  faPhone,
  faFileImage,
  faCode,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

import { NavLink } from "react-router-dom";

function About() {
  const codeRef = useRef();
  const fileRef = useRef();

  const onCodeChange = () => {
    fileRef.current.checked = false;
  };
  const onFileChange = () => {
    codeRef.current.checked = false;
  };

  return (
    <div className="grid-containers">
      <div className="grid-container-about-tab">
        <div className="tab-title personal-info">
          <FontAwesomeIcon icon={faCaretDown} />
          <p>personal-info</p>
        </div>
        <div className="tab readme-tab">
          <FontAwesomeIcon icon={faMarkdown} color={"#4b4604"} />
          <p>README.md</p>
        </div>

        <div className="tab-title contacts">
          <FontAwesomeIcon icon={faCaretDown} />
          <p>contacts</p>
        </div>
        <div>
          <div className="tab mail-tab">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>omerfguldu@gmail.com</p>
          </div>
          <div className="tab phone-tab">
            <FontAwesomeIcon icon={faPhone} />
            <p>+90 507 890 14 79</p>
          </div>
        </div>
      </div>
      <div className="grid-container-about-content">
        <input
          type="checkbox"
          onChange={onCodeChange}
          className="readme-input code-input"
          ref={codeRef}
        />
        <input
          type="checkbox"
          onChange={onFileChange}
          className="readme-input file-input"
          ref={fileRef}
        />
        <div className="about-content-col readme">
          <div className="about-content-tab">
            <p>
              <FontAwesomeIcon icon={faMarkdown} color={"#4b4604"} /> README.md
            </p>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="mobile-preview-icons">
            <FontAwesomeIcon className="code-icon" icon={faCode} />
            <FontAwesomeIcon className="file-icon" icon={faFile} />
          </div>
        </div>
        <div className="about-content-col preview">
          <div className="about-content-tab">
            <p>
              <FontAwesomeIcon icon={faFileImage} color={"#fff"} /> Preview
              README.md
            </p>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="mobile-preview-icons">
            <FontAwesomeIcon className="code-icon" icon={faCode} />
            <FontAwesomeIcon className="file-icon" icon={faFile} />
          </div>
        </div>
        <div className="readme-content-container">
          <ol>
            <li>
              <span className="readme-title">### Hi There</span>
            </li>
            <li></li>
            <li>👦🏻 I'm Omer and I'm 25 years old.</li>
            <li>🏠 I live in Istanbul, Turkey.</li>
            <li>
              🎓 I graduated from Selcuk University Computer Engineering
              Department in June 2022.
            </li>
            <li>🌱 I'm currently learning React.</li>
            <li>
              👩🏻‍💻 I am trying to improve my skills by developing projects with
              React.
            </li>
            <li></li>
            <li>{"<br/>"}</li>
            <li></li>
            <li>
              <span className="readme-title">### 🔗 Connect with me:</span>
            </li>
            <li></li>
            <li>{"<p align='left'"}</li>
            <li>
              {"<a href='website' target='_blank'> <img src='website' /> />"}
            </li>
            <li>
              {"<a href='linkedin' target='_blank'> <img src='linkedin' /> />"}
            </li>
            <li>{"<a href='gmail' target='_blank'> <img src='gmail' /> />"}</li>
            <li>{"<p/>"}</li>
            <li></li>
            <li>{"<br/>"}</li>
            <li></li>
            <li>
              <span className="readme-title">### 🛠️ Languages and Tools:</span>
            </li>
            <li></li>
            <li>
              {
                "<p align='left'> <a href='react' target='_blank'> <img src='react' /> /> <a href= '' ..."
              }
            </li>
            <li>{"<p/>"}</li>
          </ol>
        </div>
        <div className="readme-visual-content-container">
          <div className="first-section">
            <div className="hi-there">
              <p>Hi there</p>
              <img
                src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                style={{ width: "5%" }}
              />
            </div>
            <ul>
              <li>👦🏻 I'm Omer and I'm 25 years old.</li>
              <li>🏠 I live in Istanbul, Turkey.</li>
              <li>
                🎓 I graduated from Selcuk University Computer Engineering
                Department in June 2022.
              </li>
              <li>🌱 I'm currently learning React.</li>
              <li>
                👩🏻‍💻 I am trying to improve my skills by developing projects with
                React.
              </li>
            </ul>
          </div>
          <div className="second-section">
            <p>🔗 Connect with me:</p>
            <div className="icons">
              <NavLink to="/">
                <img
                  align="center"
                  src="https://img.icons8.com/fluent/96/000000/domain.png"
                  alt="omerfguldu | website"
                  width="40px"
                />
              </NavLink>
              <a href="https://linkedin.com/in/omerfguldu" target="_blank">
                <img
                  align="center"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                  alt="omerfguldu | linkedin"
                  height="30"
                  width="40"
                />
              </a>
              <a href="mailto:omerfguldu@gmail.com" target="_blank">
                {" "}
                <img
                  align="center"
                  src="https://img.icons8.com/fluent/48/000000/gmail.png"
                  alt="omerfguldu | gmail"
                  width="40"
                />{" "}
              </a>
            </div>
          </div>
          <div className="third-section">
            <p>🛠️ Languages and Tools:</p>
            <div className="icons">
              <a href="https://angular.io" target="_blank">
                {" "}
                <img
                  src="https://angular.io/assets/images/logos/angular/angular.svg"
                  alt="angular"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://getbootstrap.com" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                  alt="bootstrap"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://www.cprogramming.com/" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                  alt="c"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://www.w3schools.com/cpp/" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                  alt="cplusplus"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://www.w3schools.com/css/" target="_blank">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://git-scm.com/" target="_blank">
                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="git"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://www.typescriptlang.org/" target="_blank">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
                  alt="typescript"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://www.w3.org/html/" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://www.mongodb.com/" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="mongodb"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://postman.com" target="_blank">
                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt="postman"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://reactjs.org/" target="_blank">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://redis.io" target="_blank">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg"
                  alt="redis"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://sass-lang.com" target="_blank">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                  alt="sass"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://www.typescriptlang.org/" target="_blank">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  alt="typescript"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
