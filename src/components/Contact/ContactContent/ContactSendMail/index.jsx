import "./index.scss";
import emailjs from "@emailjs/browser";

import { useRef } from "react";

function ContactSendMail() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jvfv9ow",
        "template_ihc4ere",
        form.current,
        "geoPb9CkRyYOvIx-S"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <ul>
          <li className="">
            <label htmlFor="name">_name:</label>
            <input type="text" name="name" placeholder="Name" required />
          </li>
          <li className="">
            <label htmlFor="email">_email:</label>
            <input type="email" name="email" placeholder="Email" required />
          </li>
          <li>
            <label htmlFor="message">_message:</label>
            <textarea name="message" required placeholder="Message"></textarea>
          </li>
          <li>
            <input
              type="submit"
              className="flat-button"
              value="submit-message"
            />
          </li>
        </ul>
      </form>
    </div>
  );
}

export default ContactSendMail;
