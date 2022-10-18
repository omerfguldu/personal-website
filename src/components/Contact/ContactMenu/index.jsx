import "./index.scss";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function ContactMenu() {
  return (
    <div className="contact-menu-container">
      <div className="tab-title">
        <FontAwesomeIcon icon={faCaretDown} />
        <p>contacts</p>
      </div>
      <div className="contacts-container">
        <div className="contact">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>omerfguldu@gmail.com</p>
        </div>
        <div className="contact phone-container">
          <FontAwesomeIcon icon={faPhone} />
          <p>+90 507 890 14 79</p>
        </div>
      </div>
      <div className="tab-title">
        <FontAwesomeIcon icon={faCaretDown} />
        <p>find-me-also-in</p>
      </div>
      <div className="other-contacts-container">
        <div className="contact">
          <FontAwesomeIcon icon={faLinkedin} />
          <p>linkedin</p>
        </div>
        <div className="contact">
          <FontAwesomeIcon icon={faGithub} />
          <p>github</p>
        </div>
        <div className="contact">
          <FontAwesomeIcon icon={faTwitter} />
          <p>twitter</p>
        </div>
      </div>
    </div>
  );
}

export default ContactMenu;
