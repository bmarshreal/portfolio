import React from "react";
import EmailForm from "./EmailForm";
import "../App.css";

function Footer(params) {
  return (
    <div className="footer">
      <img
        className="logoFooter"
        alt="logoFooter"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxjaXJjbGUgcj0iMjU2IiBjeD0iMjU2IiBjeT0iMjU2IiBmaWxsPSIjZmZmZmZmIiBzaGFwZT0iY2lyY2xlIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDAsMCkiPjwvY2lyY2xlPjxnIHRyYW5zZm9ybT0ibWF0cml4KDAuOTQ5OTk5OTk5OTk5OTk5OCwwLDAsMC45NDk5OTk5OTk5OTk5OTk4LDEyLjgwMDAwMDAwMDAwMDA0LDEyLjgwMDAwMDAwMDAwMDA0KSI+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIGZpbGw9IiM5MDBjY2IiIHI9IjI1NiIgZGF0YS1vcmlnaW5hbD0iIzA3ZTVjYSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9jaXJjbGU+PC9nPjxwYXRoIGQ9Im01MDUuNjU2IDMxMi44NDQtMTY0LjE0Ni0xNjQuMTQ2Yy0xNS4xMy0xOC42ODYtMTU5LjkyMy0xMS41MTEtMTU5LjkyMy0xMS41MTFsLTE5LjY0NCAyNTYuNzc3IDExNy4wMDIgMTE3LjAwMWMxMTEuNTM1LTkuOTA5IDIwMi40OTgtOTEuMzM0IDIyNi43MTEtMTk4LjEyMXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMGI1OWIiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48Zz48cGF0aCBkPSJtMjk0LjUzOSAzOTMuOTY0aC0xMzIuNTk3di0yNzUuOTI4aDExNS40NzFjNDUuNDY5IDAgODIuNDYgMzYuOTkyIDgyLjQ2IDgyLjQ2djIuMDQzYzAgMTUuNzE5LTQuNDIxIDMwLjQyNS0xMi4wODUgNDIuOTM5IDIuMTkxIDEuODA5IDQuMzAxIDMuNzM4IDYuMzI1IDUuNzg1IDE1LjYxMiAxNS43ODggMjQuMjEgMzYuNzEgMjQuMjEgNTguOTE0LjAwMSA0Ni4yMDEtMzcuNTg1IDgzLjc4Ny04My43ODQgODMuNzg3em0tNzQuNTk3LTU4aDc0LjU5NmMxNC4yMTggMCAyNS43ODYtMTEuNTY3IDI1Ljc4Ni0yNS43ODYgMC0xNC4wNjEtMTEuNDM5LTI1LjYyNy0yNS40OTgtMjUuNzg0bC02Ljc4My0uMDc2Yy0zLjQ4MS40NS03LjAyOC42ODItMTAuNjMuNjgyaC01Ny40NzF6bTAtMTA4Ljk2NGg1Ny40NzFjMTMuNDg3IDAgMjQuNDYtMTAuOTczIDI0LjQ2LTI0LjQ2di0yLjA0M2MwLTEzLjQ4OC0xMC45NzMtMjQuNDYtMjQuNDYtMjQuNDZoLTU3LjQ3MXoiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiNmOGZmZmIiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PGc+PHBhdGggZD0ibTM1NC4xMSAyNTEuMjZjLTIuMDItMi4wNC00LjEzLTMuOTctNi4zMi01Ljc4IDcuNjYtMTIuNTIgMTIuMDgtMjcuMjIgMTIuMDgtNDIuOTR2LTIuMDRjMC00NS40Ny0zNi45OS04Mi40Ni04Mi40Ni04Mi40NmgtMjEuNDF2NThoMjEuNDFjMTMuNDkgMCAyNC40NiAxMC45NyAyNC40NiAyNC40NnYyLjA0YzAgMTMuNDktMTAuOTcgMjQuNDYtMjQuNDYgMjQuNDZoLTIxLjQxdjU4aDIxLjQxYzMuNjEgMCA3LjE1LS4yMyAxMC42My0uNjhsNi43OS4wN2MxNC4wNi4xNiAyNS40OSAxMS43MyAyNS40OSAyNS43OSAwIDE0LjIyLTExLjU2IDI1Ljc4LTI1Ljc4IDI1Ljc4aC0zOC41NHY1OGgzOC41NGM0Ni4yIDAgODMuNzgtMzcuNTggODMuNzgtODMuNzggMC0yMi4yMS04LjU5LTQzLjEzLTI0LjIxLTU4LjkyeiIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iI2Q4ZDhkOCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg=="
      />
      <h3
        className="textFooter"
        style={{
          color: "white",
          opacity: "70%",
          width: " 80%",
        }}
      >
        Constantly working, learning & striving for improvement{" "}
      </h3>

      <div className="footerBtnContainer">
        <a className="footerBtn" href="http://www.github.com/bmarshreal">
          <img
            className="footerBtn"
            alt="githubImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDU2OC4wMzQgNTY4LjAzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNTUwLjk5LDBIMTcuMDUxQzguOTQ4LDAsMi4zODEsNi41NjcsMi4zODEsMTQuNjd2NTM4LjY5NGMwLDguMTA0LDYuNTY3LDE0LjY3LDE0LjY3LDE0LjY3aDE3Ny40OTh2LTAuMTI5ICAgIGM4LjAxMS0wLjA5MiwxNC4xNDktNC41NzcsMTQuNDMxLTEyLjE2NmMwLjcyOC0xOS43MjUsMC4yMTQtMzkuNDkyLDAuMjE0LTU4LjU2MmMtMTQuMjk2LDAuNjY3LTI3Ljk0NCwyLjQ3My00MS40MzgsMS42OTUgICAgYy0yOS43NjItMS43MTQtNTIuNjMyLTE0LjQxMy02NC40OTMtNDMuNTU2Yy03LjAyNi0xNy4yNjUtMTcuNjEzLTMyLjAzMi0zNC4xMDEtNDEuODg2Yy0zLjA3OS0xLjg0Mi01Ljc3MS00LjU1NC04LjEyNy03LjMwOCAgICBjLTMuMDc5LTMuNTkyLTIuNTAzLTcuMjgyLDIuMzYyLTguMjY4YzQuOTA4LTAuOTk4LDEwLjI3LTEuNjk1LDE1LjExLTAuNzljMTkuMDA5LDMuNTY4LDMyLjE1NCwxNS40OSw0Mi4yMTYsMzEuMzQ3ICAgIGMxOS44OTYsMzEuMzcxLDUwLjUyMSw0MC45NzQsODQuOTc2LDI2LjQ4N2MxLjkyMS0wLjgwOCw0LjM2My0yLjc2Niw0LjcyNS00LjU1M2MyLjc3OC0xMy44ODcsNy45NjgtMjYuNTQ5LDE4LjQyNy0zNy42NSAgICBjLTExLjYyOC0yLjE1NC0yMi4zOTktMy43MzktMzIuOTYyLTYuMTg4Yy0zMC40MTctNy4wMzgtNTcuNzQyLTE5LjctNzcuNzI0LTQ0Ljg0OGMtMTYuMzAzLTIwLjUxNC0yMy43NTgtNDQuNTI4LTI3LjE4NS03MC4wODYgICAgYy01LjM2Ny00MC4wMzEtMC41NjMtNzcuNTAzLDI2LjkyOC0xMDkuNDkzYzEuMzg5LTEuNjE2LDIuMTQyLTQuOTI3LDEuNTI0LTYuOTRjLTYuODg1LTIyLjQ5Ny01LjgzMy00NC44MDUsMC45OTEtNjcuMDUxICAgIGMzLjU4MS0xMS42ODMsNC41NzgtMTIuMjY1LDE2LjUtMTAuNjM3YzAuNzI5LDAuMDk4LDEuNDM4LDAuMjgxLDIuMTYxLDAuNDA0YzIzLjg5OCwzLjk1NCw0NC40NjgsMTUuNTI2LDY0LjczMSwyNy45NSAgICBjMi43MjQsMS42NzEsNi44NzMsMi43MTEsOS44NjYsMS45ODNjNDguMzk3LTExLjc0NCw5Ni43MDItMTEuNjk1LDE0NS4wOTMsMC4wNDNjMi44MDksMC42NzksNi41NjEtMC4yODgsOS4yNDctMS42OTUgICAgYzExLjAxNi01Ljc1OSwyMS41NjEtMTIuNDU0LDMyLjcxOC0xNy45MTRjMTIuOTgtNi4zNDYsMjYuNjUyLTExLjEyLDQxLjM3MS0xMC44NTdjMi41NzYsMC4wNDksNi41NjEsMi41MDksNy40MjMsNC43ODYgICAgYzguODU2LDIzLjQ2NCwxMC43MjMsNDcuMzc1LDMuNjY2LDcxLjc5NGMtMC43NTMsMi42MDcsMC4zNjcsNi4zMjIsMS43NjksOC44OTJjNi45NjUsMTIuNzc5LDE2LjY4OSwyNC41NzIsMjEuMDk2LDM4LjEyNyAgICBjMTMuNDM0LDQxLjMxNiw4LjUzOCw4Mi4yMjktOS43NDksMTIxLjA2Yy0xNi43NTcsMzUuNTk0LTQ3LjgzNCw1My42My04NC42MjEsNjIuOTMzYy0xMi40MjQsMy4xNC0yNS4xNTMsNS4wNDktMzguNTU2LDcuNjgxICAgIGMxNy41NjQsMTguMzQ4LDIwLjMxOCw0MC43NCwyMC4wMDYsNjQuMTkyYy0wLjMyNCwyNC4xOTItMC4yMzgsNDguMzkxLTAuMjUxLDcyLjU4OWMtMC4wMDYsMTEuNzIsNS4xMSwxOC4xOTUsMTQuMDM5LDE4LjU3NCAgICBjLTAuMDA2LDAuMDM3LDE4OC43MjMsMC4wMzcsMTg4LjcyMywwLjAzN1YxNC42N0M1NjUuNjUzLDYuNTY3LDU1OS4wODcsMCw1NTAuOTksMHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
          />
        </a>
        <a className="footerBtn" href="http://www.blake120289@yahoo.com">
          <img
            className="footerBtn"
            alt="yahooImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0Mi42NjcgMjQyLjY2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTAsMHYyNDIuNjY3aDI0Mi42NjdWMEgweiBNMTg4LjMwMyw4Mi43MjVsLTE3LjIwNiwzLjc3N2wtMzkuNDQ4LDQ3LjIxMWwzLjM1Nyw0MS4zMzZsMjIuODcxLDEuNjc5bDEuMDQ5LDEwLjA3Mkg4MC40NTIgIGwyLjA5OC05LjY1MmwyNS4xNzktNC4xOTdsMC4xNC00MC4xNDdMNzAuOTQsNjkuMjk2bC0yMC4xNDMtMy45MTd2LTkuNTEyaDY3LjE0NWwtMC4zNSw4LjYwM2wtMjAuOTgzLDIuOTM4bDI3LjkwNyw1NS4xODUgIGwyNi42NDgtMzYuNzJsLTE1LjMxNy0zLjU2N2wtMS4wNDktOS42NTJoNTcuMDczTDE4OC4zMDMsODIuNzI1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
          />
        </a>

        <a className="footerBtn" href="http://www.facebook.com">
          <img
            className="footerBtn"
            alt="facebookImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDE2IDE2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwdjE2aDE2di0xNmgtMTZ6TTEyLjkgOC40aC0yLjF2NS42aC0yLjF2LTUuNmgtMS41di0yaDEuNWMwIDAgMC0wLjggMC0xLjcgMC0xLjUgMC45LTIuNyAyLjktMi43IDAuOCAwIDEuNCAwLjEgMS40IDAuMXYxLjljMCAwLTAuNiAwLTEuMyAwcy0wLjggMC4zLTAuOCAwLjljMCAwLjEgMCAwLjEgMCAwLjEgMCAwLjIgMCAwLjUgMCAxLjRoMi4xbC0wLjEgMnoiIGRhdGEtb3JpZ2luYWw9IiM0NDQ0NDQiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPjwvc3ZnPg=="
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
