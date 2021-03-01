import React from "react";
import "../App.css";
import {
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";

function Navigate() {
  return (
    <div>
      <Navbar
        className="navigate"
        expand="lg"
        // style={{ backgroundColor: "none", maxWidth: "80%", left: "10%" }}
      >
        <Navbar.Brand href="#home">
          <img
            style={{ height: "2.5rem", width: "2.5rem" }}
            alt="icon"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxjaXJjbGUgcj0iMjU2IiBjeD0iMjU2IiBjeT0iMjU2IiBmaWxsPSIjOTAwY2NiIiBzaGFwZT0iY2lyY2xlIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDAsMCkiPjwvY2lyY2xlPjxnIHRyYW5zZm9ybT0ibWF0cml4KDAuOTQ5OTk5OTk5OTk5OTk5OCwwLDAsMC45NDk5OTk5OTk5OTk5OTk4LDEyLjgwMDAwMDAwMDAwMDA0LDEyLjgwMDAwMDAwMDAwMDA0KSI+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIGZpbGw9IiNmZmZmZmYiIHI9IjI1NiIgZGF0YS1vcmlnaW5hbD0iIzA3ZTVjYSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9jaXJjbGU+PC9nPjxwYXRoIGQ9Im01MDUuNjU2IDMxMi44NDQtMTY0LjE0Ni0xNjQuMTQ2Yy0xNS4xMy0xOC42ODYtMTU5LjkyMy0xMS41MTEtMTU5LjkyMy0xMS41MTFsLTE5LjY0NCAyNTYuNzc3IDExNy4wMDIgMTE3LjAwMWMxMTEuNTM1LTkuOTA5IDIwMi40OTgtOTEuMzM0IDIyNi43MTEtMTk4LjEyMXoiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMGI1OWIiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48Zz48cGF0aCBkPSJtMjk0LjUzOSAzOTMuOTY0aC0xMzIuNTk3di0yNzUuOTI4aDExNS40NzFjNDUuNDY5IDAgODIuNDYgMzYuOTkyIDgyLjQ2IDgyLjQ2djIuMDQzYzAgMTUuNzE5LTQuNDIxIDMwLjQyNS0xMi4wODUgNDIuOTM5IDIuMTkxIDEuODA5IDQuMzAxIDMuNzM4IDYuMzI1IDUuNzg1IDE1LjYxMiAxNS43ODggMjQuMjEgMzYuNzEgMjQuMjEgNTguOTE0LjAwMSA0Ni4yMDEtMzcuNTg1IDgzLjc4Ny04My43ODQgODMuNzg3em0tNzQuNTk3LTU4aDc0LjU5NmMxNC4yMTggMCAyNS43ODYtMTEuNTY3IDI1Ljc4Ni0yNS43ODYgMC0xNC4wNjEtMTEuNDM5LTI1LjYyNy0yNS40OTgtMjUuNzg0bC02Ljc4My0uMDc2Yy0zLjQ4MS40NS03LjAyOC42ODItMTAuNjMuNjgyaC01Ny40NzF6bTAtMTA4Ljk2NGg1Ny40NzFjMTMuNDg3IDAgMjQuNDYtMTAuOTczIDI0LjQ2LTI0LjQ2di0yLjA0M2MwLTEzLjQ4OC0xMC45NzMtMjQuNDYtMjQuNDYtMjQuNDZoLTU3LjQ3MXoiIGZpbGw9IiNmOGZmZmIiIGRhdGEtb3JpZ2luYWw9IiNmOGZmZmIiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PGc+PHBhdGggZD0ibTM1NC4xMSAyNTEuMjZjLTIuMDItMi4wNC00LjEzLTMuOTctNi4zMi01Ljc4IDcuNjYtMTIuNTIgMTIuMDgtMjcuMjIgMTIuMDgtNDIuOTR2LTIuMDRjMC00NS40Ny0zNi45OS04Mi40Ni04Mi40Ni04Mi40NmgtMjEuNDF2NThoMjEuNDFjMTMuNDkgMCAyNC40NiAxMC45NyAyNC40NiAyNC40NnYyLjA0YzAgMTMuNDktMTAuOTcgMjQuNDYtMjQuNDYgMjQuNDZoLTIxLjQxdjU4aDIxLjQxYzMuNjEgMCA3LjE1LS4yMyAxMC42My0uNjhsNi43OS4wN2MxNC4wNi4xNiAyNS40OSAxMS43MyAyNS40OSAyNS43OSAwIDE0LjIyLTExLjU2IDI1Ljc4LTI1Ljc4IDI1Ljc4aC0zOC41NHY1OGgzOC41NGM0Ni4yIDAgODMuNzgtMzcuNTggODMuNzgtODMuNzggMC0yMi4yMS04LjU5LTQzLjEzLTI0LjIxLTU4LjkyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iI2Q4ZDhkOCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg=="
          />
        </Navbar.Brand>
        <Navbar.Toggle
          className="navigateToggle"
          style={{
            // position: "relative",
            zIndex: "3",
            border: "none",
            backgroundSize: "2rem, 2rem",
            backgroundRepeat: "no-repeat",
          }}
          aria-controls="basic-navbar-nav"
        >
          <img
            style={{ height: "2rem", width: "2rem" }}
            alt="menu"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM4NCAzODQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTM2OCAxNTQuNjY3OTY5aC0zNTJjLTguODMyMDMxIDAtMTYtNy4xNjc5NjktMTYtMTZzNy4xNjc5NjktMTYgMTYtMTZoMzUyYzguODMyMDMxIDAgMTYgNy4xNjc5NjkgMTYgMTZzLTcuMTY3OTY5IDE2LTE2IDE2em0wIDAiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zNjggMzJoLTM1MmMtOC44MzIwMzEgMC0xNi03LjE2Nzk2OS0xNi0xNnM3LjE2Nzk2OS0xNiAxNi0xNmgzNTJjOC44MzIwMzEgMCAxNiA3LjE2Nzk2OSAxNiAxNnMtNy4xNjc5NjkgMTYtMTYgMTZ6bTAgMCIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTM2OCAyNzcuMzMyMDMxaC0zNTJjLTguODMyMDMxIDAtMTYtNy4xNjc5NjktMTYtMTZzNy4xNjc5NjktMTYgMTYtMTZoMzUyYzguODMyMDMxIDAgMTYgNy4xNjc5NjkgMTYgMTZzLTcuMTY3OTY5IDE2LTE2IDE2em0wIDAiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#skillCardContainer">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form inline>
            <Nav.Link href="#contactBox">
              <Button
                style={{
                  borderColor: "#900ccb",
                  color: "#900ccb",
                }}
                className="menuBtn"
                variant="outline-secondary"
              >
                Contact
              </Button>
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigate;
