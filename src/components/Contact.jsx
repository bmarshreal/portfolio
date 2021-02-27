import React from "react";
import Modals from "./Modals";

function Contact(params) {
  return (
    <div id="contactBox" className="contactBox">
      <div className="contactText">
        <h1 className="contactHeading">Lets Create Something!</h1>

        <p className="contactParagraph">
          Are you interested in creating a great project together? Lets meet up.
          Contact me below!{" "}
        </p>
      </div>
      <Modals />
    </div>
  );
}

export default Contact;
