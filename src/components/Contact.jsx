import React from "react";
import { Button } from "react-bootstrap";

function Contact(params) {
  return (
    <div id="contactBox" className="contactBox">
      <div className="contactText">
        <h1 className="contactHeading">Lets Create Something!</h1>

        <p className="contactParagraph">
          Are you interested in created a great project together? Lets meet up.
          Contact me below!{" "}
        </p>
      </div>
      <Button
        className="modalBtn"
        style={{
          backgroundColor: "#300CCB",
          border: "3px solid #900ccb",
          borderRadius: "15px",
          margin: "2px",
          position: "relative",
          bottom: "65%",
          right: "2%",
        }}
      >
        Contact Me!
      </Button>
    </div>
  );
}

export default Contact;
