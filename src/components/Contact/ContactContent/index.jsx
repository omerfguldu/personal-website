import "./index.scss";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ContactSendMail from "./ContactSendMail";
import ContactShowMail from "./ContactShowMail";
import { MailContentProvider } from "../../../context/MailContentContext";

function ContactContent() {
  return (
    <div className="contact-content-container">
      <div className="contact-content-header">
        <div className="contacts-tab">
          <p>contacts</p>
          <FontAwesomeIcon className="close-icon" icon={faXmark} />
        </div>
        <div className="rest-of-tab"></div>
      </div>
      <div className="contact-content">
        <MailContentProvider>
          <ContactSendMail />
          <ContactShowMail />
        </MailContentProvider>
      </div>
    </div>
  );
}

export default ContactContent;
