import React from "react";
import "../App.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function SkillCards(params) {
  const newSkillCard = [0, 1, 2].map((value, index) => {
    return (
      <Card id="skillCardContainer" className="skillCardContainer" key={index}>
        <h3 style={{ color: "#900ccb", margin: "0.5rem" }}>My Skills</h3>
        <Card.Body style={{ borderRadius: "3rem" }}>
          {value === 0 ? (
            <img
              alt="cardIcon"
              className="cardIcon"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5NiA0OTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ1NiwxMTJoLThWMEg0OHYxMTJoLThjLTIyLjA1NiwwLTQwLDE3Ljk0NC00MCw0MHYyNTZjMCwyMi4wNTYsMTcuOTQ0LDQwLDQwLDQwaDExMnYzMmgtMjR2MTZoMjQwdi0xNmgtMjR2LTMyaDExMiAgICBjMjIuMDU2LDAsNDAtMTcuOTQ0LDQwLTQwVjE1MkM0OTYsMTI5Ljk0NCw0NzguMDU2LDExMiw0NTYsMTEyeiBNNjQsMTZoMzY4djQ4SDY0VjE2eiBNNjQsODBoMzY4djI3MmgtNDh2LTIyLjIwOGwtMzAuNjY0LTcuODQ4ICAgIGMtMS4xNi0zLjE2OC0yLjQ4OC02LjMzNi0zLjk3Ni05LjQ4bDE2LjE2OC0yNy4yNzJMMzIyLjgsMjQyLjQ2NGwtMjcuMjcyLDE2LjE2OGMtMy4xNTItMS40ODgtNi4zMi0yLjgxNi05LjQ4LTMuOTY4TDI3OC4yMDgsMjI0ICAgIGgtNjAuNDI0bC03Ljg0LDMwLjY2NGMtMy4xNiwxLjE2LTYuMzI4LDIuNDg4LTkuNDgsMy45NjhsLTI3LjI3Mi0xNi4xNjhsLTQyLjcyOCw0Mi43MjhsMTYuMTY4LDI3LjI3MiAgICBjLTEuNDg4LDMuMTQ0LTIuODE2LDYuMzEyLTMuOTc2LDkuNDhMMTEyLDMyOS43OTJWMzUySDY0VjgweiBNMzA5Ljk2LDM1MkgxODYuMTA0YzcuMTM2LTI3LjU2LDMyLjEzNi00OCw2MS44OTYtNDggICAgYzE4LjcwNCwwLDM2LjQzMiw4LjE2LDQ4LjYyNCwyMi4zNzZsMTIuMTUyLTEwLjQwOEMyOTMuNTM2LDI5OC4xOTIsMjcxLjM4NCwyODgsMjQ4LDI4OGMtMzguNjMyLDAtNzAuOTUyLDI3LjUyOC03OC4zODQsNjRIMTI4ICAgIHYtOS43OTJsMjcuMTI4LTYuOTM2bDEuMzM2LTQuMjMyYzEuNi01LjA1NiwzLjczNi0xMC4xNjgsNi4zNi0xNS4yMjRsMi4wNDgtMy45NDRsLTE0LjMxMi0yNC4xNDRsMjUuMTYtMjUuMTY4bDI0LjE0NCwxNC4zMiAgICBsMy45NDQtMi4wNDhjNS4wNTYtMi42MzIsMTAuMTg0LTQuNzc2LDE1LjIzMi02LjM3Nmw0LjIzMi0xLjM0NEwyMzAuMjA4LDI0MGgzNS41NzZsNi45MzYsMjcuMTJsNC4yMzIsMS4zNDQgICAgYzUuMDQ4LDEuNiwxMC4xNjgsMy43NDQsMTUuMjMyLDYuMzc2bDMuOTQ0LDIuMDQ4bDI0LjE0NC0xNC4zMmwyNS4xNiwyNS4xNjhMMzMxLjEyLDMxMS44OGwyLjA0OCwzLjk0NCAgICBjMi42MjQsNS4wNTYsNC43NjgsMTAuMTY4LDYuMzYsMTUuMjI0bDEuMzM2LDQuMjMyTDM2OCwzNDIuMjA4VjM1MmgtNDEuNzQ0Yy0xLjQ4OC03LjI5Ni0zLjg2NC0xNC40LTcuMzA0LTIwLjk4NGwtMTQuMTc2LDcuNDA4ICAgIEMzMDcuMDQ4LDM0Mi43ODQsMzA4Ljc1MiwzNDcuMzI4LDMwOS45NiwzNTJ6IE0zMjgsNDgwSDE2OHYtMzJoMTYwVjQ4MHogTTQ4MCw0MDhjMCwxMy4yMzItMTAuNzY4LDI0LTI0LDI0SDQwICAgIGMtMTMuMjMyLDAtMjQtMTAuNzY4LTI0LTI0di04aDQ2NFY0MDh6IE00ODAsMzg0SDE2VjE1MmMwLTEzLjIzMiwxMC43NjgtMjQsMjQtMjRoOHYyNDBoMTIwaDE2aDEyOGgxNmgxMjBWMTI4aDggICAgYzEzLjIzMiwwLDI0LDEwLjc2OCwyNCwyNFYzODR6IiBmaWxsPSIjOTAwY2NiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwb2x5Z29uIHBvaW50cz0iMjkyLjQ0LDExMy4zNDQgMjgzLjU2LDEyNi42NTYgMzIxLjU3NiwxNTIgMjgzLjU2LDE3Ny4zNDQgMjkyLjQ0LDE5MC42NTYgMzUwLjQyNCwxNTIgICAiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcG9seWdvbj4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBvbHlnb24gcG9pbnRzPSIyMTIuNDQsMTI2LjY1NiAyMDMuNTYsMTEzLjM0NCAxNDUuNTc2LDE1MiAyMDMuNTYsMTkwLjY1NiAyMTIuNDQsMTc3LjM0NCAxNzQuNDI0LDE1MiAgICIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wb2x5Z29uPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSIxOTcuNDAyIiB5PSIxNDQuMDI2IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjMxNjQgLTAuOTQ4NiAwLjk0ODYgMC4zMTY0IDI1LjMxMzQgMzM5LjE3OTkpIiB3aWR0aD0iMTAxLjE4OSIgaGVpZ2h0PSIxNiIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSIxNDQiIHk9IjMyIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMTEyIiB5PSIzMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjOTAwY2NiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjgwIiB5PSIzMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjOTAwY2NiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
            />
          ) : value === 1 ? (
            <img
              alt="cardIcon"
              className="cardIcon"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zNS4yNDIgMjguMzc1LS4zMDMtMS45NzdjLS42NDMuMDk5LTEuMjkyLjE4Mi0xLjk0LjI1MmwuMjE3IDEuOTg4Yy42NzctLjA3NCAxLjM1NS0uMTYgMi4wMjYtLjI2M3oiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMzkuMjc2IDI3LjUxNS0uNTUyLTEuOTIyYy0uNTg4LjE2OS0xLjIxOC4zMjMtMS44NzEuNDYxbC40MTEgMS45NTdjLjctLjE0NyAxLjM3Ny0uMzE0IDIuMDEyLS40OTZ6IiBmaWxsPSIjOTAwY2NiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTMxLjE4NyAyOC44MjItLjE0NC0xLjk5NGMtLjY2Ni4wNDgtMS4zMjQuMDg0LTEuOTY2LjExbC4wODEgMS45OThjLjY2Mi0uMDI2IDEuMzQxLS4wNjQgMi4wMjktLjExNHoiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMzMgNDIuNzA5LjIxNyAxLjk4OGMuNjc3LS4wNzQgMS4zNTUtLjE2MSAyLjAyNi0uMjY0bC0uMzAzLTEuOTc3Yy0uNjQzLjEtMS4yOTIuMTgzLTEuOTQuMjUzeiIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zNi44NTMgNDIuMTExLjQxMSAxLjk1N2MuNzA4LS4xNDggMS4zODUtLjMxNSAyLjAxMi0uNDk1bC0uNTUyLTEuOTIyYy0uNTguMTY2LTEuMjA5LjMyMi0xLjg3MS40NnoiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtNjMgMjN2LTIyaC0xNnYyMmg3djUuMTQyYy0xLjM5OS4zNjQtMi40OTQgMS40NTktMi44NTggMi44NThoLTguMTQydi0xMWMwLTMuOTU1LTExLjEyLTUtMTctNXMtMTcgMS4wNDUtMTcgNXYxNS4yNzlsLS45MzYtLjU1Ni01LjM0MiA1LjM0MiAxLjQ4IDIuNDg5Yy0uMTQ3LjMxNy0uMjgxLjYzOC0uNC45NTZsLTIuODAyLjcxM3Y3LjU1NWwyLjgwMi43MTNjLjExOS4zMTguMjUyLjYzOS40Ljk1NmwtMS40OCAyLjQ4OSA1LjM0MiA1LjM0MiAyLjQ4OS0xLjQ3OWMuMzE3LjE0Ny42MzcuMjgxLjk1Ni40bC43MTQgMi44MDFoNy41NTVsLjcxMy0yLjgwMmMuMzE5LS4xMTkuNjM5LS4yNTMuOTU2LS40bDIuNDg5IDEuNDc5IDUuMzQyLTUuMzQyLTEuNDgtMi40ODljLjE0Ny0uMzE3LjI4MS0uNjM4LjQtLjk1NmwyLjgwMi0uNzEzdi0yLjk3OWMzLjc0NC0uMzEgMTItMS4zODEgMTItNC43OTh2LTExaDguMTQyYy4zNjQgMS4zOTkgMS40NTkgMi40OTQgMi44NTggMi44NTh2NS4xNDJoLTd2MjJoMTZ2LTIyaC03di01LjE0MmMxLjcyLS40NDcgMy0xLjk5OSAzLTMuODU4cy0xLjI4LTMuNDExLTMtMy44NTh2LTUuMTQyem0tMzctNmM5Ljc0NCAwIDE1IDIuMTI5IDE1IDNzLTUuMjU2IDMtMTUgMy0xNS0yLjEyOS0xNS0zIDUuMjU2LTMgMTUtM3ptLTE1IDUuNTQxYzMuNDcxIDEuODg4IDEwLjY2IDIuNDU5IDE1IDIuNDU5czExLjUyOS0uNTcxIDE1LTIuNDU5djUuNDU5YzAgLjg3MS01LjI1NiAzLTE1IDNzLTE1LTIuMTI5LTE1LTN6bTE4IDI3LjY4Mi0yLjM1NC41OTgtLjE2OS41MjhjLS4xNzkuNTYtLjQxNSAxLjEyNi0uNzA0IDEuNjg2bC0uMjU0LjQ5MiAxLjI0NiAyLjA5NS0zLjE0MyAzLjE0My0yLjA5Ni0xLjI0Ni0uNDkzLjI1NmMtLjU1OC4yODgtMS4xMjQuNTI1LTEuNjgzLjcwNGwtLjUyOC4xNjgtLjU5OSAyLjM1M2gtNC40NDVsLS41OTktMi4zNTQtLjUyOC0uMTY4Yy0uNTU5LS4xNzktMS4xMjUtLjQxNi0xLjY4My0uNzA0bC0uNDkzLS4yNTYtMi4wOTYgMS4yNDYtMy4xNDMtMy4xNDMgMS4yNDYtMi4wOTUtLjI1NC0uNDkyYy0uMjg5LS41Ni0uNTI1LTEuMTI2LS43MDQtMS42ODZsLS4xNy0uNTI4LTIuMzU0LS41OTd2LTQuNDQ1bDIuMzU0LS41OTguMTY5LS41MjhjLjE3OS0uNTYuNDE1LTEuMTI2LjcwNC0xLjY4NmwuMjU0LS40OTItMS4yNDYtMi4wOTUgMy4xNDMtMy4xNDMgMi4wOTYgMS4yNDYuNDkzLS4yNTZjLjU1OC0uMjg4IDEuMTI0LS41MjUgMS42ODMtLjcwNGwuNTI4LS4xNjguNTk5LTIuMzU0aDQuNDQ1bC41OTkgMi4zNTQuNTI4LjE2OGMuNTU5LjE3OSAxLjEyNS40MTYgMS42ODMuNzA0bC40OTMuMjU2IDIuMDk2LTEuMjQ2IDMuMTQzIDMuMTQzLTEuMjQ2IDIuMDk1LjI1NC40OTJjLjI4OS41Ni41MjUgMS4xMjYuNzA0IDEuNjg2bC4xNjkuNTI4IDIuMzU1LjU5N3ptMi0zLjQzNHYtMi41NjZsLTIuODAyLS43MTNjLS4xMTktLjMxOC0uMjUyLS42MzktLjQtLjk1NmwuODA2LTEuMzU1YzQuNzkzLS4xODYgOS43MzEtMS4wMzYgMTIuMzk3LTIuNTc4djUuMzc5Yy0uMDAxLjU4NS0yLjk5OCAyLjIwMy0xMC4wMDEgMi43ODl6bS0yLjU4My03LjU4NS00LjQ4MS00LjQ4MS0yLjQ4OSAxLjQ3OWMtLjMxNy0uMTQ3LS42MzctLjI4MS0uOTU2LS40bC0uNzE0LTIuODAyaC03LjU1NWwtLjcxMyAyLjgwMmMtLjE3LjA2NC0uMzQuMTQyLS41MS4yMTR2LTUuNDc0YzMuNDcyIDEuODg3IDEwLjY2MSAyLjQ1OCAxNS4wMDEgMi40NThzMTEuNTI5LS41NzEgMTUtMi40NTl2NS40NTljMCAuODQtNC4yODYgMi45MDUtMTIuNTgzIDMuMjA0em0zMi41ODMgMjEuNzk2aC0xMnYtMThoMTJ6bS00LTI5YzAgMS4xMDMtLjg5NyAyLTIgMnMtMi0uODk3LTItMiAuODk3LTIgMi0yIDIgLjg5NyAyIDJ6bS04LTI5aDEydjE4aC0xMnoiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMTYgMzljLTQuOTYyIDAtOSA0LjAzNy05IDlzNC4wMzggOSA5IDkgOS00LjAzNyA5LTktNC4wMzgtOS05LTl6bTAgMTZjLTMuODYgMC03LTMuMTQxLTctN3MzLjE0LTcgNy03IDcgMy4xNDEgNyA3LTMuMTQgNy03IDd6IiBmaWxsPSIjOTAwY2NiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTE2IDQzYy0yLjc1NyAwLTUgMi4yNDMtNSA1czIuMjQzIDUgNSA1IDUtMi4yNDMgNS01LTIuMjQzLTUtNS01em0wIDhjLTEuNjU0IDAtMy0xLjM0Ni0zLTNzMS4zNDYtMyAzLTMgMyAxLjM0NiAzIDMtMS4zNDYgMy0zIDN6IiBmaWxsPSIjOTAwY2NiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTUxIDQ1aDh2MmgtOHoiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtNTkgNTNoLTh2Nmg4em0tMiA0aC00di0yaDR6IiBmaWxsPSIjOTAwY2NiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTUxIDVoOHYyaC04eiIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im01MSA5aDh2MmgtOHoiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtNTEgMTNoOHYyaC04eiIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im01MSAxN2g4djJoLTh6IiBmaWxsPSIjOTAwY2NiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTUxIDQ5aDh2MmgtOHoiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMzUgMTloMnYyaC0yeiIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMSAxOWgydjJoLTJ6IiBmaWxsPSIjOTAwY2NiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI3IDE5aDJ2MmgtMnoiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMTUgMTloMnYyaC0yeiIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yMyAxOWgydjJoLTJ6IiBmaWxsPSIjOTAwY2NiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTE5IDE5aDJ2MmgtMnoiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
            />
          ) : value === 2 ? (
            <img
              alt="cardIcon"
              className="cardIcon"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMSA1MTEuOTk5NjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTM0Ny4zMzk4NDQgMTU1LjE0ODQzOGMtNS41MTk1MzIgMC0xMCA0LjQ2ODc1LTEwIDkuOTk2MDkzIDAgNS41MjM0MzggNC40ODA0NjggMTAgMTAgMTAgNS41MzEyNSAwIDEwLTQuNDc2NTYyIDEwLTEwIDAtNS41MjczNDMtNC40Njg3NS05Ljk5NjA5My0xMC05Ljk5NjA5M3ptMCAwIiBmaWxsPSIjOTAwY2NiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTY1LjY0NDUzMSAzMzYuODM5ODQ0Yy01LjUzMTI1IDAtMTAgNC40ODA0NjgtMTAgMTAgMCA1LjUzMTI1IDQuNDY4NzUgMTAgMTAgMTAgNS41MTk1MzEgMCAxMC00LjQ2ODc1IDEwLTEwIDAtNS41MTk1MzItNC40ODA0NjktMTAtMTAtMTB6bTAgMCIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTUwMC4wNTg1OTQgNjEuNTE5NTMxYy0zLjM3NS0uNzg1MTU2LTYuOTIxODc1LjIzNDM3NS05LjM1OTM3NSAyLjY5NTMxM2wtNDEuNDU3MDMxIDQxLjc4NTE1NmgtMTkuODc1bC0yMS44Nzg5MDctMjIuNjY3OTY5di0yMC4xNTIzNDNsNDAuODYzMjgxLTQxLjQ3MjY1N2MyLjQxNzk2OS0yLjQ1MzEyNSAzLjQwMjM0NC01Ljk4MDQ2OSAyLjYwMTU2My05LjMzNTkzNy0uNzk2ODc1LTMuMzUxNTYzLTMuMjY1NjI1LTYuMDU0Njg4LTYuNTMxMjUtNy4xNTYyNS0xMC4yNjU2MjUtMy40NjA5MzgtMjEuMDA3ODEzLTUuMjE0ODQ0LTMxLjkzMzU5NC01LjIxNDg0NC0zMi41NzAzMTIgMC02Mi4xNjAxNTYgMTUuMTg3NS04MS4xODM1OTMgNDEuNjY3OTY5LTE3LjgwNDY4OCAyNC43ODkwNjItMjMuMjkyOTY5IDU1LjE2Nzk2OS0xNS40Mjk2ODggODQuMjQyMTg3bC03My42NjAxNTYgNzMuNjYwMTU2LTEyMi43MTg3NS0xMjN2LTI0LjE0MDYyNGMwLTMuNTExNzE5LTEuODQzNzUtNi43Njk1MzItNC44NTU0NjktOC41NzQyMTlsLTcwLjcwNzAzMS00Mi40Mjk2ODhjLTMuOTM3NS0yLjM2MzI4MS04Ljk3MjY1Ni0xLjc0MjE4Ny0xMi4yMTQ4NDQgMS41MDM5MDdsLTI4LjI4MTI1IDI4LjI3NzM0M2MtMy4yNDIxODggMy4yNDYwOTQtMy44NjMyODEgOC4yODEyNS0xLjUwMzkwNiAxMi4yMTg3NWw0Mi40MjE4NzUgNzAuNzA3MDMxYzEuODA0Njg3IDMuMDExNzE5IDUuMDU4NTkzIDQuODUxNTYzIDguNTcwMzEyIDQuODU1NDY5bDI0LjEzMjgxMy4wMDc4MTMgMTIyLjczMDQ2OCAxMjMtNzMuMzc4OTA2IDczLjM3ODkwNmMtMjkuMDc0MjE4LTcuODU5Mzc1LTU5LjQ2ODc1LTIuMzYzMjgxLTg0LjI2OTUzMSAxNS40NTMxMjUtMjYuNDY0ODQ0IDE5LjAxMTcxOS00MS42NDA2MjUgNDguNTkzNzUtNDEuNjQwNjI1IDgxLjE2NDA2MyAwIDEwLjkyMTg3NCAxLjc1MzkwNiAyMS42Njc5NjggNS4yMTQ4NDQgMzEuOTI5Njg3IDEuMTA1NDY4IDMuMjg1MTU2IDMuODM1OTM3IDUuNzY1NjI1IDcuMjEwOTM3IDYuNTQ2ODc1IDMuMzc4OTA3Ljc4NTE1NiA2LjkyMTg3NS0uMjM0Mzc1IDkuMzYzMjgxLTIuNjk1MzEybDQxLjQ1MzEyNi00MS43ODEyNWgxOS45ODQzNzRsMjIuNzY5NTMyIDIyLjc2OTUzMXYxOS45ODQzNzVsLTQxLjc4MTI1IDQxLjQ1MzEyNWMtMi40NjA5MzggMi40NDE0MDYtMy40ODA0NjkgNS45ODQzNzUtMi42OTUzMTMgOS4zNjMyODEuNzgxMjUgMy4zNzUgMy4yNjE3MTkgNi4xMDU0NjkgNi41NDY4NzUgNy4yMTA5MzggMTAuMjYxNzE5IDMuNDYwOTM3IDIxLjAwNzgxMyA1LjIxNDg0MyAzMS45Mjk2ODggNS4yMTQ4NDMgMzIuNTcwMzEyIDAgNjIuMTQ4NDM3LTE1LjE3OTY4NyA4MS4xNjQwNjItNDEuNjQ0NTMxIDE3LjgxNjQwNi0yNC44MDA3ODEgMjMuMzEyNS01NS4xOTE0MDYgMTUuNDUzMTI1LTg0LjI2NTYyNWw1OC45MzM1OTQtNTguOTMzNTk0IDEzLjUgMTQuNjY0MDYzLTYuMTk1MzEzIDYuMTkxNDA2Yy0zLjkwNjI1IDMuOTA2MjUtMy45MDYyNSAxMC4yMzgyODEgMCAxNC4xNDQ1MzEgMy45MDYyNSAzLjkwMjM0NCAxMC4yMzQzNzYgMy45MDIzNDQgMTQuMTQ0NTMyIDBsNS42MDkzNzUtNS42MDkzNzUgMTI2LjY2NDA2MiAxMzcuNTg1OTM4Yy4wOTM3NS4xMDE1NjIuMTkxNDA3LjE5OTIxOC4yODkwNjMuMjk2ODc1IDIzLjQzNzUgMjMuNDM3NSA2MS40MTAxNTYgMjMuNDQ1MzEyIDg0Ljg1OTM3NS0uMDAzOTA3IDIzLjM4MjgxMi0yMy4zOTQ1MzEgMjMuMzgyODEyLTYxLjQ2MDkzNyAwLTg0Ljg1NTQ2OC0uMTAxNTYzLS4xMDE1NjMtLjIwNzAzMS0uMTk5MjE5LS4zMTI1LS4yOTY4NzVsLTEzNy44MDA3ODEtMTI2LjQyMTg3NSA1LjU0Njg3NC01LjU0Njg3NWMzLjkwNjI1LTMuOTAyMzQ0IDMuOTA2MjUtMTAuMjM0Mzc1IDAtMTQuMTQwNjI1cy0xMC4yMzQzNzQtMy45MDYyNS0xNC4xNDQ1MzEgMGwtNi4xNTIzNDMgNi4xNTYyNS0xNC42OTE0MDctMTMuNDg0Mzc1IDU5LjIxODc1LTU5LjIxODc1YzguNDE3OTY5IDIuMjUgMTcuMTA1NDY5IDMuMzkwNjI1IDI1LjkwNjI1IDMuMzkwNjI1IDU1LjE0MDYyNSAwIDk5Ljk5NjA5NC00NC44NTkzNzUgOTkuOTk2MDk0LTk5Ljk5NjA5NCAwLTEwLjkyNTc4MS0xLjc1MzkwNi0yMS42Njc5NjktNS4yMTQ4NDQtMzEuOTMzNTk0LTEuMTA1NDY5LTMuMjg1MTU2LTMuODM1OTM3LTUuNzY1NjI1LTcuMjEwOTM3LTYuNTQ2ODc1em0tNDExLjc3MzQzOCA0MC40MTQwNjNjLTEuODc1LTEuODc4OTA2LTQuNDE3OTY4LTIuODM1OTM4LTcuMDc0MjE4LTIuODM1OTM4bC0yMi42MTcxODgtLjAwNzgxMi0zNS40OTIxODgtNTkuMjU3ODEzIDE3LjIzODI4Mi0xNy4yMzgyODEgNTkuMTU2MjUgMzUuNXYyMi42MTcxODhjMCAyLjY0ODQzNyAxLjA1MDc4MSA1LjE4NzUgMi45MjE4NzUgNy4wNjI1bDEyNS42NTYyNSAxMjUuOTQxNDA2LTE0LjE0NDUzMSAxNC4xNDA2MjV6bTI1NC4zNjMyODIgMTk1LjA2MjUgMTM4LjI2OTUzMSAxMjYuODQ3NjU2YzE1LjQ0NTMxMiAxNS42MDkzNzUgMTUuMzk4NDM3IDQwLjg4MjgxMi0uMTQ0NTMxIDU2LjQzMzU5NC0xNS41NzgxMjYgMTUuNTc4MTI1LTQwLjc5Njg3NiAxNS42MjUtNTYuNDM3NS4xMzY3MThsLTEyNy4wNzgxMjYtMTM4LjAzNTE1NnptLTE0Ljc1LTEzLjUzNTE1Ni00NC4xOTkyMTkgNDQuMTkxNDA2LTEzLjUtMTQuNjY0MDYzIDQzLjAwNzgxMi00My4wMTE3MTl6bTg0LjU4OTg0My0xMDMuNDY0ODQ0Yy04Ljc0NjA5MyAwLTE3LjM0NzY1Ni0xLjQwMjM0NC0yNS41NTg1OTMtNC4xNjc5NjktMy41OTc2NTctMS4yMDcwMzEtNy41NzQyMTktLjI3NzM0NC0xMC4yNjE3MTkgMi40MDYyNS01MC4xMzI4MTMgNTAuMTMyODEzLTE1OC4xNTYyNSAxNTguMTUyMzQ0LTE5Ny45MzM1OTQgMTk3LjkzMzU5NC0yLjY4NzUgMi42ODc1LTMuNjIxMDk0IDYuNjY0MDYyLTIuNDA2MjUgMTAuMjY1NjI1IDguMzEyNSAyNC42ODM1OTQgNC4zMzU5MzcgNTEuMDExNzE4LTEwLjkxNDA2MyA3Mi4yNDIxODctMTUuMjA3MDMxIDIxLjE2Nzk2OS0zOC44NzEwOTMgMzMuMzEyNS02NC45MTc5NjggMzMuMzEyNS0yLjkyNTc4MiAwLTUuODM1OTM4LS4xNjAxNTYtOC43MTg3NS0uNDY4NzVsMzEuNzYxNzE4LTMxLjUxNTYyNWMxLjg5MDYyNi0xLjg3NSAyLjk1NzAzMi00LjQyOTY4NyAyLjk1NzAzMi03LjA5NzY1NnYtMjguMjg5MDYyYzAtMi42NTIzNDQtMS4wNTQ2ODgtNS4xOTUzMTMtMi45Mjk2ODgtNy4wNzAzMTNsLTI4LjYyODkwNi0yOC42Mjg5MDZjLTEuODc1LTEuODc1LTQuNDE3OTY5LTIuOTI5Njg4LTcuMDcwMzEyLTIuOTI5Njg4aC0yOC4yODkwNjNjLTIuNjY3OTY5IDAtNS4yMjI2NTYgMS4wNjY0MDctNy4xMDE1NjMgMi45NTcwMzFsLTMxLjUxMTcxOCAzMS43NjE3MTljLS4zMTI1LTIuODgyODEyLS40Njg3NS01Ljc5Mjk2OS0uNDY4NzUtOC43MTg3NSAwLTI2LjA1MDc4MSAxMi4xNDA2MjUtNDkuNzEwOTM3IDMzLjMxMjUtNjQuOTE3OTY5IDIxLjIyNjU2Mi0xNS4yNSA0Ny41NTg1OTQtMTkuMjMwNDY4IDcyLjI0NjA5NC0xMC45MTQwNjIgMy41OTc2NTYgMS4yMTQ4NDQgNy41NzQyMTguMjgxMjUgMTAuMjYxNzE4LTIuNDA2MjUuNTUwNzgyLS41NDY4NzUgMTk3Ljc5Mjk2OS0xOTcuNzkyOTY5IDE5Ny45MzM1OTQtMTk3LjkzMzU5NCAyLjY4NzUtMi42ODc1IDMuNjE3MTg4LTYuNjYwMTU2IDIuNDA2MjUtMTAuMjYxNzE4LTguMzE2NDA2LTI0LjY4MzU5NC00LjM0NzY1Ni01MS4wMDM5MDcgMTAuODkwNjI1LTcyLjIxODc1IDE1LjIxODc1LTIxLjE4NzUgMzguODg2NzE5LTMzLjMzNTkzOCA2NC45Mzc1LTMzLjMzNTkzOCAzLjAxNTYyNSAwIDYuMDExNzE5LjE2Nzk2OSA4Ljk4MDQ2OS40OTYwOTRsLTMxLjEwMTU2MyAzMS41NjY0MDZjLTEuODQzNzUgMS44NzEwOTQtMi44NzUgNC4zOTA2MjUtMi44NzUgNy4wMTU2MjV2MjguMjg5MDYzYzAgMi41OTM3NSAxLjAwMzkwNyA1LjA4MjAzMSAyLjgwNDY4OCA2Ljk0NTMxMmwyNy42Mjg5MDYgMjguNjI4OTA2YzEuODgyODEzIDEuOTUzMTI1IDQuNDgwNDY5IDMuMDU0Njg4IDcuMTk1MzEzIDMuMDU0Njg4aDI4LjI4OTA2MmMyLjY2NDA2MiAwIDUuMjE4NzUtMS4wNjI1IDcuMDk3NjU2LTIuOTU3MDMybDMxLjUxMTcxOS0zMS43NTc4MTJjLjMxMjUgMi44ODI4MTIuNDY4NzUgNS43OTI5NjkuNDY4NzUgOC43MTg3NSAwIDQ0LjEwOTM3NS0zNS44ODY3MTkgNzkuOTk2MDk0LTc5Ljk5NjA5NCA3OS45OTYwOTR6bTAgMCIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMxMS45ODgyODEgMTg2LjM1NTQ2OS0xMjUuMTM2NzE5IDEyNS4xMzY3MTljLTMuOTAyMzQzIDMuOTAyMzQzLTMuOTAyMzQzIDEwLjIzNDM3NCAwIDE0LjE0MDYyNCAzLjkwNjI1IDMuOTA2MjUgMTAuMjM4MjgyIDMuOTA2MjUgMTQuMTQ0NTMyIDBsMTI1LjEzNjcxOC0xMjUuMTM2NzE4YzMuOTA2MjUtMy45MDIzNDQgMy45MDYyNS0xMC4yMzQzNzUgMC0xNC4xNDA2MjVzLTEwLjIzODI4MS0zLjkwNjI1LTE0LjE0NDUzMSAwem0wIDAiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00MzguMzU1NDY5IDQ1MmMzLjkwNjI1IDMuODk0NTMxIDEwLjIzODI4MSAzLjg5NDUzMSAxNC4xNDQ1MzEtLjAyMzQzOCAzLjg5ODQzOC0zLjkxMDE1NiAzLjg4NjcxOS0xMC4yNDIxODctLjAyMzQzOC0xNC4xNDA2MjRsLTkwLjEzNjcxOC04OS44NDc2NTdjLTMuOTEwMTU2LTMuODk4NDM3LTEwLjI0NjA5NC0zLjg4NjcxOS0xNC4xNDA2MjUuMDIzNDM4LTMuOTAyMzQ0IDMuOTE0MDYyLTMuODkwNjI1IDEwLjI0MjE4Ny4wMTk1MzEgMTQuMTQwNjI1em0wIDAiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
            />
          ) : null}
          <Card.Title>
            {value === 0
              ? "Front-End"
              : value === 1
              ? "Back-End"
              : value === 2
              ? "Utility"
              : null}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <p style={{ color: "#900ccb" }}>Technologies</p>
          </Card.Subtitle>
          <Card.Text
            style={{ position: "relative", width: "55%", left: "25%" }}
          >
            {value === 0
              ? "HTML, CSS, React, React-Router, EJS, Bootstrap, Material-UI, "
              : value === 1
              ? "Node, Express, MySQL, SQLite, Sequelize (ORM), MongoDB, Mongoose, OAuth, Passport, RESTful API "
              : value === 2
              ? "Git/Github, Jest, Enzyme, Postman, robo3t"
              : null}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>{newSkillCard[0]}</Col>
          <Col>{newSkillCard[1]}</Col>
          <Col>{newSkillCard[2]}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default SkillCards;