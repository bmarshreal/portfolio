import React, { useState } from "react";
import "../App.css";
import { Modal, Button } from "react-bootstrap";
import EmailForm from "./EmailForm";

function Modals({ value }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{
          backgroundColor: "#300CCB",
          border: "3px solid #900ccb",
          borderRadius: "15px",
          margin: "2px",
          // position: "relative",
          // top: "80%",
        }}
        className="modalBtn"
        onClick={handleShow}
      >
        Contact Me!
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          style={{
            backgroundColor: "#900ccb",
            color: "white",
          }}
          closeButton
        ></Modal.Header>
        <Modal.Body
          style={{
            height: "22rem",
            color: "white",
            backgroundColor: "#300ccb",
          }}
        >
          {value === 0
            ? "A motivational website built using: "
            : value === 1
            ? "Secrets"
            : value === 2
            ? "RESTful Wiki"
            : value === 3
            ? "Coming Soon...1"
            : null}
          <EmailForm />
        </Modal.Body>
        <Modal.Footer
          style={{
            backgroundColor: "#900ccb",
            color: "white",
          }}
        >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
