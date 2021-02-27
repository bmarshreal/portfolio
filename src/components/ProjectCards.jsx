import React, { useState } from "react";
import "../App.css";
import Modals from "./Modals";
import { Button, CardDeck, Card } from "react-bootstrap";
import motivateself from "../images/motivateself.jpg";
import keys from "../images/keys.png";
import rest from "../images/restapi.png";

function ProjectCards(params) {
  const [isShown0, setIsShown0] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);

  return (
    <div>
      <CardDeck className="projectCards">
        <Card
          style={{ borderRadius: "10px" }}
          onMouseEnter={() => setIsShown0(true)}
          onMouseLeave={() => setIsShown0(false)}
        >
          {isShown0 ? (
            <Card.Body
              style={{ borderRadius: "10px" }}
              className="projectCardBody"
            >
              <Card.Title>Motivate!</Card.Title>
              <Card.Text>
                Need something to give you that little extra push? This app is
                meant to do exactly that. Read a few inspiring quotes
                accompanied by beautiful pictures.
              </Card.Text>
              <a href="https://motivbkb.netlify.app/">
                <Button
                  style={{
                    backgroundColor: "#300CCB",
                    border: "3px solid #900ccb",
                    borderRadius: "15px",
                    margin: "2px",
                  }}
                  className="modalBtn"
                >
                  Live Demo
                </Button>
              </a>
              <a href="https://github.com/bmarshreal/Motivate">
                <Button
                  style={{
                    backgroundColor: "#300CCB",
                    border: "3px solid #900ccb",
                    borderRadius: "15px",
                    margin: "2px",
                  }}
                  className="modalBtn"
                >
                  Github Repo
                </Button>
              </a>
              <Modals />
            </Card.Body>
          ) : (
            <Card.Img
              className="hoverImg"
              style={{
                backgroundImage: `linear-gradient(rgba(144, 12, 203, 0.5), rgba(0, 0, 0, 0.5)),
      url(${motivateself})`,
                borderRadius: "10px",
              }}
              variant="top"
              // src={motivateself}
            ></Card.Img>
          )}
        </Card>
        <Card
          style={{ borderRadius: "10px" }}
          onMouseEnter={() => setIsShown1(true)}
          onMouseLeave={() => setIsShown1(false)}
        >
          {isShown1 ? (
            <Card.Body
              style={{ borderRadius: "10px" }}
              className="projectCardBody"
            >
              <Card.Title>Secrets</Card.Title>
              <Card.Text>
                This web app is meant to be used for anonymous user chat.
                Utilizing several forms of authentication and authorization.
              </Card.Text>
              <a href="https://secretsbkb.herokuapp.com/">
                <Button
                  style={{
                    backgroundColor: "#300CCB",
                    border: "3px solid #900ccb",
                    borderRadius: "15px",
                    margin: "2px",
                  }}
                  className="modalBtn"
                >
                  Live Demo
                </Button>
              </a>
              <a href="https://github.com/bmarshreal/Secrets">
                <Button
                  style={{
                    backgroundColor: "#300CCB",
                    border: "3px solid #900ccb",
                    borderRadius: "15px",
                    margin: "2px",
                  }}
                  className="modalBtn"
                >
                  Github Repo
                </Button>
              </a>
              <Modals />
            </Card.Body>
          ) : (
            <Card.Img
              className="hoverImg"
              style={{
                backgroundImage: `linear-gradient(rgba(48, 12, 203, 0.5), rgba(0, 0, 0, 0.5)),
      url(${keys})`,
                borderRadius: "10px",
              }}
              variant="top"
              // src={motivateself}
            ></Card.Img>
          )}
        </Card>
        <Card
          style={{ borderRadius: "10px" }}
          onMouseEnter={() => setIsShown2(true)}
          onMouseLeave={() => setIsShown2(false)}
        >
          {isShown2 ? (
            <Card.Body
              style={{ borderRadius: "10px" }}
              className="projectCardBody"
            >
              <Card.Title>RESTful Wiki</Card.Title>
              <Card.Text>
                Meant to be a simple web development wiki flashcard app to aid
                in the web development process.
              </Card.Text>
              <a href="https://restful-wikibkb.netlify.app/">
                <Button
                  style={{
                    backgroundColor: "#300CCB",
                    border: "3px solid #900ccb",
                    borderRadius: "15px",
                    margin: "2px",
                  }}
                  className="modalBtn"
                >
                  Live Demo
                </Button>
              </a>
              <a href="https://github.com/bmarshreal/wikiRESTful">
                <Button
                  style={{
                    backgroundColor: "#300CCB",
                    border: "3px solid #900ccb",
                    borderRadius: "15px",
                    margin: "2px",
                  }}
                  className="modalBtn"
                >
                  Github Repo
                </Button>
              </a>
              <Modals />
            </Card.Body>
          ) : (
            <Card.Img
              className="hoverImg"
              style={{
                backgroundImage: `linear-gradient(rgba(144, 12, 203, 0.5), rgba(0, 0, 0, 0.5)),
      url(${rest})`,
                borderRadius: "10px",
              }}
              variant="top"
              // src={motivateself}
            ></Card.Img>
          )}
        </Card>
        <Card
          style={{ borderRadius: "10px" }}
          onMouseEnter={() => setIsShown3(true)}
          onMouseLeave={() => setIsShown3(false)}
        >
          {isShown3 ? (
            <Card.Body
              style={{ borderRadius: "10px" }}
              className="projectCardBody"
            >
              <Card.Title>Coming Soon...</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <a href="https://motivbkb.netlify.app/">
                <Button
                  style={{
                    backgroundColor: "#300CCB",
                    border: "3px solid #900ccb",
                    borderRadius: "15px",
                    margin: "2px",
                  }}
                  className="modalBtn"
                >
                  Live Demo
                </Button>
              </a>
              <a href="https://github.com/bmarshreal/Motivate">
                <Button
                  style={{
                    backgroundColor: "#300CCB",
                    border: "3px solid #900ccb",
                    borderRadius: "15px",
                    margin: "2px",
                  }}
                  className="modalBtn"
                >
                  Github Repo
                </Button>
              </a>
              <Modals />
            </Card.Body>
          ) : (
            <Card.Img
              className="hoverImg"
              style={{
                backgroundImage: `linear-gradient(rgba(048, 12, 203, 0.5), rgba(0, 0, 0, 0.5)),
      url(${motivateself})`,
                borderRadius: "10px",
              }}
              variant="top"
              // src={motivateself}
            ></Card.Img>
          )}
        </Card>
      </CardDeck>
    </div>
  );
}

export default ProjectCards;
