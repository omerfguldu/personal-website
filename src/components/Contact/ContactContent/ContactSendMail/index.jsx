import "./index.scss";
import emailjs from "@emailjs/browser";

import { useRef } from "react";
import { useMailContent } from "../../../../context/MailContentContext";

function ContactSendMail() {
  const form = useRef();
  const { setMailContent, mailContent } = useMailContent();

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

  const handleChange = (e, type) => {
    switch (type) {
      case "email":
        setMailContent({
          name: mailContent.name,
          email: e.target.value,
          message: mailContent.message,
        });
        break;
      case "message":
        setMailContent({
          name: mailContent.name,
          email: mailContent.email,
          message: e.target.value,
        });
        break;
      default:
        setMailContent({
          name: e.target.value,
          email: mailContent.email,
          message: mailContent.message,
        });
        break;
    }
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <ul>
          <li className="">
            <label htmlFor="name">_name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={(e, type = "name") => handleChange(e, type)}
            />
          </li>
          <li className="">
            <label htmlFor="email">_email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={(e, type = "email") => handleChange(e, type)}
            />
          </li>
          <li>
            <label htmlFor="message">_message:</label>
            <textarea
              name="message"
              required
              placeholder="Message"
              onChange={(e, type = "message") => handleChange(e, type)}
            ></textarea>
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
