import "./index.scss";

import React from "react";
import ContactMenu from "./ContactMenu";
import ContactContent from "./ContactContent";

function Contact() {
  return (
    <div className="contact-container">
      <ContactMenu />
      <ContactContent />
    </div>
  );
}

export default Contact;
