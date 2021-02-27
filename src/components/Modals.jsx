import React, { useState } from "react";
import "../App.css";
import { Modal, Button } from "react-bootstrap";

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
        Technologies Used
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {value === 0
              ? "Motivate!"
              : value === 1
              ? "Secrets"
              : value === 2
              ? "RESTful Wiki"
              : value === 3
              ? "Coming Soon..."
              : null}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {value === 0
            ? "A motivational website built using: "
            : value === 1
            ? "Secrets"
            : value === 2
            ? "RESTful Wiki"
            : value === 3
            ? "Coming Soon..."
            : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
