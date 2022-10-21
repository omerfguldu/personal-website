import "./index.scss";
import emailjs from "@emailjs/browser";

import { useRef, useState } from "react";
import { useMailContent } from "../../../../context/MailContentContext";

function ContactSendMail() {
  const form = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();
  const { setMailContent, setIsEmailSent } = useMailContent();
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
          setMailContent({
            name: "",
            email: "",
            message: "",
          });
          nameInput.current.value = "";
          emailInput.current.value = "";
          messageInput.current.value = "";
          setIsEmailSent(true);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  const handleChange = (e) => {
    setMailContent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
              onChange={handleChange}
              ref={nameInput}
            />
          </li>
          <li className="">
            <label htmlFor="email">_email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              ref={emailInput}
            />
          </li>
          <li>
            <label htmlFor="message">_message:</label>
            <textarea
              name="message"
              required
              placeholder="Message"
              onChange={handleChange}
              ref={messageInput}
            ></textarea>
          </li>
          <li>
            <input
              type="submit"
              className="flat-button primary-button"
              value="submit-message"
            />
          </li>
        </ul>
      </form>
    </div>
  );
}

export default ContactSendMail;
