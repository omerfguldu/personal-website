import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div>find me in:</div>
        <a href="https://linkedin.com/in/omerfguldu" target="_blank">
          <FontAwesomeIcon className="fa-icons" icon={faLinkedin} />
        </a>
        <a href="https://twitter.com" target="_blank">
          <FontAwesomeIcon className="fa-icons" icon={faTwitter} />
        </a>
        <div></div>
        <a href="https://github.com/omerfguldu" target="_blank">
          <span>@omerfguldu</span>
          <FontAwesomeIcon className="fa-icons" icon={faGithub} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
