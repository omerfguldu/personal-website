import "./index.scss";

import React from "react";
import { useMailContent } from "../../../../context/MailContentContext";

function ContactShowMail() {
  const { mailContent } = useMailContent();

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="show-mail-container">
      <ol className="show-mail-list">
        <li>
          <span className="colorVarType">const</span>{" "}
          <span className="colorVarName">button</span>{" "}
          <span className="colorVarType"> = </span>{" "}
          <span className="colorVarName">document.querySelector</span>(
          <span className="colorVarValue">'#SendBtn'</span>);
        </li>
        <li></li>
        <li>
          <span className="colorVarType">const</span>{" "}
          <span className="colorVarName">message</span>{" "}
          <span className="colorVarType"> = </span> {`{`}
        </li>
        <li className="mr">
          <span className="colorVarName">name</span>:{" "}
          <span className="colorVarValue">"{mailContent.name}"</span>
        </li>
        <li className="mr">
          <span className="colorVarName">email</span>:{" "}
          <span className="colorVarValue">"{mailContent.email}"</span>
        </li>
        <li className="mr">
          <span className="colorVarName">message</span>:{" "}
          <span className="colorVarValue">"{mailContent.message}"</span>
        </li>
        <li className="mr">
          date: <span className="colorVarValue">"{today}"</span>
        </li>
        <li>{"}"}</li>
        <li></li>
        <li>
          <span className="colorVarName">button.addEventListener</span>({""}
          <span className="colorVarValue">'click'</span>, (){" "}
          <span className="colorVarType">{"=>"}</span>
          {" {"}
        </li>
        <li className="mr">
          <span className="colorVarName">form.send</span>({""}
          <span className="colorVarName">message</span>);
        </li>
        <li>{"})"}</li>
      </ol>
    </div>
  );
}

export default ContactShowMail;
