import React from "react";
import "./App.css";
import Navigate from "./components/Navigate";
import ScrollFloater from "./components/ScrollFloater";
import Greeting from "./components/Greeting";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Navigate />
      <h1 className="intro" style={{}}>
        Hi, I'm Blake. Web Developer.
      </h1>
      <p className="intro" style={{ fontSize: "1.25rem", marginTop: "0" }}>
        I genuinely love making things that come to life through the power of
        code and I'm always eager to learn more.
      </p>
      <div className="avatar">
        <img
          style={{
            position: "relative",
            margin: "1rem",
            borderRadius: "180px",
            height: "11rem",
            width: "11rem",
            zIndex: 3,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "40% -45%",
            backgroundSize: "12rem, 12rem",
            backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5NiA0OTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQ4OCAyNDhjMCAxMzIuNTQ2ODc1LTEwNy40NTMxMjUgMjQwLTI0MCAyNDBzLTI0MC0xMDcuNDUzMTI1LTI0MC0yNDAgMTA3LjQ1MzEyNS0yNDAgMjQwLTI0MCAyNDAgMTA3LjQ1MzEyNSAyNDAgMjQwem0wIDAiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiM1N2E0ZmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNDggNDk2Yy0xMzYuOTY0ODQ0IDAtMjQ4LTExMS4wMzUxNTYtMjQ4LTI0OHMxMTEuMDM1MTU2LTI0OCAyNDgtMjQ4IDI0OCAxMTEuMDM1MTU2IDI0OCAyNDhjLS4xNjAxNTYgMTM2LjkwMjM0NC0xMTEuMDk3NjU2IDI0Ny44Mzk4NDQtMjQ4IDI0OHptMC00ODBjLTEyOC4xMjg5MDYgMC0yMzIgMTAzLjg3MTA5NC0yMzIgMjMyczEwMy44NzEwOTQgMjMyIDIzMiAyMzIgMjMyLTEwMy44NzEwOTQgMjMyLTIzMmMtLjE0MDYyNS0xMjguMDcwMzEyLTEwMy45Mjk2ODgtMjMxLjg1OTM3NS0yMzItMjMyem0wIDAiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDRmYWMiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+")`,
          }}
          alt="avatar"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDE5Ni42NTEgMTk2LjY1MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSI4My42MjgiIHk9IjE0Ni4zODYiIHN0eWxlPSIiIHdpZHRoPSIyOS4zOTUiIGhlaWdodD0iMzIuOTIzIiBmaWxsPSIjZmRjYzliIiBkYXRhLW9yaWdpbmFsPSIjZmRjYzliIj48L3JlY3Q+CgkJPHBhdGggc3R5bGU9IiIgZD0iTTgzLjYyOCwxNTAuMjY0YzAsMCwxMi4zNjUsNy44NzQsMjkuMzk1LDYuMDUxdi05LjkyOUg4My42MjhWMTUwLjI2NHoiIGZpbGw9IiNmY2JjODUiIGRhdGEtb3JpZ2luYWw9IiNmY2JjODUiPjwvcGF0aD4KCQk8ZWxsaXBzZSBzdHlsZT0iIiBjeD0iNDEuMjQyIiBjeT0iOTUuMzM2IiByeD0iMTQuMzQzIiByeT0iMTYuMzY0IiBmaWxsPSIjZmNiYzg1IiBkYXRhLW9yaWdpbmFsPSIjZmNiYzg1Ij48L2VsbGlwc2U+CgkJPGVsbGlwc2Ugc3R5bGU9IiIgY3g9IjE1NS40MDkiIGN5PSI5NS4zMzYiIHJ4PSIxNC4zNDMiIHJ5PSIxNi4zNjQiIGZpbGw9IiNmY2JjODUiIGRhdGEtb3JpZ2luYWw9IiNmY2JjODUiPjwvZWxsaXBzZT4KCQk8cGF0aCBzdHlsZT0iIiBkPSJNMTU1LjM1Miw2NC4wOGMwLTI0LjEwNC0xNy42MzctNDEuNzQtNTcuMDI2LTQxLjc0Yy0zOS4zODksMC01Ny4wMjYsMTcuNjM3LTU3LjAyNiw0MS43NCAgICBjMCwyNC4xMDQtNC4xMTUsODcuNTk3LDU3LjAyNiw4Ny41OTdDMTU5LjQ2NywxNTEuNjc3LDE1NS4zNTIsODguMTg1LDE1NS4zNTIsNjQuMDh6IiBmaWxsPSIjZmRjYzliIiBkYXRhLW9yaWdpbmFsPSIjZmRjYzliIj48L3BhdGg+CgkJPGc+CgkJCTxnPgoJCQkJPGVsbGlwc2Ugc3R5bGU9IiIgY3g9IjcwLjU1IiBjeT0iOTEuNDE4IiByeD0iNi4xNzMiIHJ5PSI2Ljc2MSIgZmlsbD0iIzc0NGEyNSIgZGF0YS1vcmlnaW5hbD0iIzNiMjUxOSIgY2xhc3M9IiI+PC9lbGxpcHNlPgoJCQkJPGNpcmNsZSBzdHlsZT0iIiBjeD0iNjcuODU5IiBjeT0iODguNDMzIiByPSIxLjg0NiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iI2ZmZmZmZiI+PC9jaXJjbGU+CgkJCTwvZz4KCQkJPHBhdGggc3R5bGU9IiIgZD0iTTYwLjY3NSw3NC42NjJjMi45MTksMS40Niw3LjYwNi00Ljk2LDE4LjMzNSwwLjYyNWMxLjk1NiwxLjAxOCwzLjEyMy04LjcwOC04LjM3Ny04LjcwOCAgICAgQzYwLjY3NSw2Ni41NzksNTguOTExLDczLjc4MSw2MC42NzUsNzQuNjYyeiIgZmlsbD0iIzg2NDYxYiIgZGF0YS1vcmlnaW5hbD0iIzg2NDYxYiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8Zz4KCQkJCTxlbGxpcHNlIHN0eWxlPSIiIGN4PSIxMjYuODY0IiBjeT0iOTEuNDE4IiByeD0iNi4xNzMiIHJ5PSI2Ljc2MSIgZmlsbD0iIzc0NGEyNSIgZGF0YS1vcmlnaW5hbD0iIzNiMjUxOSIgY2xhc3M9IiI+PC9lbGxpcHNlPgoJCQkJPGNpcmNsZSBzdHlsZT0iIiBjeD0iMTI0LjE3MyIgY3k9Ijg4LjQzMyIgcj0iMS44NDYiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiNmZmZmZmYiPjwvY2lyY2xlPgoJCQk8L2c+CgkJCTxwYXRoIHN0eWxlPSIiIGQ9Ik0xMzUuOTc3LDc0LjY2MmMtMi45MTksMS40Ni03LjYwNi00Ljk2LTE4LjMzNSwwLjYyNWMtMS45NTYsMS4wMTgtMy4xMjMtOC43MDgsOC4zNzgtOC43MDggICAgIEMxMzUuOTc3LDY2LjU3OSwxMzcuNzQsNzMuNzgxLDEzNS45NzcsNzQuNjYyeiIgZmlsbD0iIzg2NDYxYiIgZGF0YS1vcmlnaW5hbD0iIzg2NDYxYiIgY2xhc3M9IiI+PC9wYXRoPgoJCTwvZz4KCQk8cGF0aCBzdHlsZT0iIiBkPSJNOTguMzI2LDExNS4xOThjLTYuMSwwLTkuNzc0LTQuNTU3LTkuNzc0LTIuMzUyYzAsMi4yMDQsMS43NjQsNi4zOTMsOS43NzQsNi4zOTMgICAgYzguMDEsMCw5Ljc3NC00LjE4OSw5Ljc3NC02LjM5M0MxMDguMSwxMTAuNjQyLDEwNC40MjUsMTE1LjE5OCw5OC4zMjYsMTE1LjE5OHoiIGZpbGw9IiNmY2JjODUiIGRhdGEtb3JpZ2luYWw9IiNmY2JjODUiPjwvcGF0aD4KCQk8cGF0aCBzdHlsZT0iIiBkPSJNOTguMzI2LDEzNS40NjljLTIuMTEsMC0zLjM4MS0xLjU3Ni0zLjM4MS0wLjgxM2MwLDAuNzYzLDAuNjEsMi4yMTIsMy4zODEsMi4yMTIgICAgYzIuNzcxLDAsMy4zOC0xLjQ0OSwzLjM4LTIuMjEyQzEwMS43MDYsMTMzLjg5MywxMDAuNDM1LDEzNS40NjksOTguMzI2LDEzNS40Njl6IiBmaWxsPSIjZmNiYzg1IiBkYXRhLW9yaWdpbmFsPSIjZmNiYzg1Ij48L3BhdGg+CgkJPHBhdGggc3R5bGU9IiIgZD0iTTk4LjMyNiwxMjkuODUyYy05LjY2OCwwLTE1LjQ5My0zLjkzNy0xNS40OTMtMi45MzljMCwwLjk5NywyLjc5Niw0LjkyNCwxNS40OTMsNC45MjQgICAgYzEyLjY5NywwLDE1LjQ5My0zLjkyNywxNS40OTMtNC45MjRDMTEzLjgxOCwxMjUuOTE0LDEwNy45OTQsMTI5Ljg1Miw5OC4zMjYsMTI5Ljg1MnoiIGZpbGw9IiNmNzk0NWUiIGRhdGEtb3JpZ2luYWw9IiNmNzk0NWUiPjwvcGF0aD4KCTwvZz4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik05OC4zMjYsMTU5LjYxM3YzNy4wMzhIMjYuODk4QzI2Ljg5OCwxODEuNjYsNjQuNTIxLDE1OS42MTMsOTguMzI2LDE1OS42MTN6IiBmaWxsPSIjZDU4ZTY0IiBkYXRhLW9yaWdpbmFsPSIjZDU4ZTY0Ij48L3BhdGg+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNOTguMzI2LDE1OS42MTN2MzcuMDM4aDcxLjQyN0MxNjkuNzUzLDE4MS42NiwxMzIuMTI5LDE1OS42MTMsOTguMzI2LDE1OS42MTN6IiBmaWxsPSIjZDU4ZTY0IiBkYXRhLW9yaWdpbmFsPSIjZDU4ZTY0Ij48L3BhdGg+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNOTguMzI2LDE1OS42MTNjLTcuMTksMC0xNC41NTIsMS4wMDUtMjEuNjg5LDIuNzIxYzAuMDQ4LDAuMDYzLDcuOTE3LDEwLjIxMywyMS42ODksMTAuMjEzICAgYzEyLjc1NCwwLDIxLjIzMy04LjY5MiwyMi40NjItMTAuMDNDMTEzLjQxLDE2MC42ODYsMTA1Ljc3NSwxNTkuNjEzLDk4LjMyNiwxNTkuNjEzeiIgZmlsbD0iI2JmODA1YSIgZGF0YS1vcmlnaW5hbD0iI2JmODA1YSIgY2xhc3M9IiI+PC9wYXRoPgoJPHBhdGggc3R5bGU9IiIgZD0iTTgzLjYyOCwxNjAuODk1YzAsMCw0LjI5OSw1LjMzMiwxNC42OTcsNS4zMzJjMTAuMzk4LDAsMTQuNjk4LTUuMzMyLDE0LjY5OC01LjMzMiAgIFM5Ny43NzQsMTU1LjM0NCw4My42MjgsMTYwLjg5NXoiIGZpbGw9IiNmZGNjOWIiIGRhdGEtb3JpZ2luYWw9IiNmZGNjOWIiPjwvcGF0aD4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik05OC4zMjUsMTM5LjExdjEzLjY2OWMtMzAuNzE3LDAtNDAuODU3LTE2LjM3OC00My44NjEtMjAuOTQzICAgYy0yLjIyNy0zLjM4NywxNC40NTIsMTEuOTA0LDI5LjE2NCwxMS45MDRDOTAuMDk1LDE0My43NCw4OS44MDEsMTM5LjExLDk4LjMyNSwxMzkuMTF6IiBmaWxsPSIjODY0NjFiIiBkYXRhLW9yaWdpbmFsPSIjODY0NjFiIiBjbGFzcz0iIj48L3BhdGg+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNOTguMzI1LDEzOS4xMXYxMy42NjljMzAuNzE4LDAsNDAuODU4LTE2LjM3OCw0My44NjEtMjAuOTQzICAgYzIuMjI3LTMuMzg3LTE0LjQ1MiwxMS45MDQtMjkuMTY0LDExLjkwNEMxMDYuNTU2LDE0My43NCwxMDYuODUsMTM5LjExLDk4LjMyNSwxMzkuMTF6IiBmaWxsPSIjODY0NjFiIiBkYXRhLW9yaWdpbmFsPSIjODY0NjFiIiBjbGFzcz0iIj48L3BhdGg+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNOTguNzEyLDQ4LjIwN1YwQzQ4LjM1NCwwLDM4Ljk0OCwxOC44MTMsMzYuNTk2LDU0LjA4NmMtMi4zNTIsMzUuMjc0LDIuOTU4LDQ3LjQxNyw2LjQ3Niw0Ny4zNzIgICBjMy41MTgtMC4wNDYsMS42MjctNDAuNDQsNi40NTgtNDkuMTM2QzU4LjM0OSwzNi40NDksNzQuMTEzLDQ4LjIwNyw5OC43MTIsNDguMjA3eiIgZmlsbD0iIzg2NDYxYiIgZGF0YS1vcmlnaW5hbD0iIzg2NDYxYiIgY2xhc3M9IiI+PC9wYXRoPgoJPHBhdGggc3R5bGU9IiIgZD0iTTk4LjcxMiw0OC4yMDdWMGM1MC4zNTgsMCw1OS43NjQsMTguODEzLDYyLjExNiw1NC4wODZjMi4zNTIsMzUuMjc0LTIuOTU4LDQ3LjQxNy02LjQ3Niw0Ny4zNzIgICBjLTMuNTE4LTAuMDQ2LTEuNjI3LTQwLjQ0LTYuNDU4LTQ5LjEzNkMxMzkuMDc2LDM2LjQ0OSwxMjMuMzExLDQ4LjIwNyw5OC43MTIsNDguMjA3eiIgZmlsbD0iIzg2NDYxYiIgZGF0YS1vcmlnaW5hbD0iIzg2NDYxYiIgY2xhc3M9IiI+PC9wYXRoPgoJPHBhdGggc3R5bGU9IiIgZD0iTTY3LjAxNCwxNjUuMTA5Yy0yMi4yMDYsNy41MDItNDAuMTE1LDIxLjE5OS00MC4xMTUsMzEuNTQyaDQwLjExN3YtMzEuNTQySDY3LjAxNHoiIGZpbGw9IiM3NDRhMjUiIGRhdGEtb3JpZ2luYWw9IiM3NDRhMjUiIGNsYXNzPSIiPjwvcGF0aD4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik02OS4xNTEsMTk2LjY1MXYtMzMuODA1YzAsMC01LjczMiwyLjIwNS03LjcxNiwzLjIzM2wtNS44NSwzMC41NzFINjkuMTUxeiIgZmlsbD0iIzU3MzUxNCIgZGF0YS1vcmlnaW5hbD0iIzU3MzUxNCIgY2xhc3M9IiI+PC9wYXRoPgoJPHBhdGggc3R5bGU9IiIgZD0iTTEyOS42MzgsMTY1LjEwOWMyMi4yMDYsNy41MDIsNDAuMTE1LDIxLjE5OSw0MC4xMTUsMzEuNTQyaC00MC4xMTd2LTMxLjU0MkgxMjkuNjM4eiIgZmlsbD0iIzc0NGEyNSIgZGF0YS1vcmlnaW5hbD0iIzc0NGEyNSIgY2xhc3M9IiI+PC9wYXRoPgoJPHBhdGggc3R5bGU9IiIgZD0iTTEyNy41LDE5Ni42NTF2LTMzLjgwNWMwLDAsNS43MzIsMi4yMDUsNy43MTYsMy4yMzNsNS44NSwzMC41NzFIMTI3LjV6IiBmaWxsPSIjNTczNTE0IiBkYXRhLW9yaWdpbmFsPSIjNTczNTE0IiBjbGFzcz0iIj48L3BhdGg+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
        />
      </div>
      <img
        className="devIcon1"
        alt="development icon"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ4MCA0ODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQwNy4zNjcsMTEwLjI3NGMtMC4zNjItMy4yNjUtMi42ODUtNS45NzctNS44NTYtNi44MzZsLTIxLjYyNS01Ljg4M2MtMC41MTYtMS4zNjctMS4wODItMi43MjMtMS42OTktNC4wNjYgICAgbDExLjE1Ni0xOS40NzdjMS43OTctMy4xMzMsMS4yNy03LjA4MS0xLjI4NS05LjYzM2wtMTIuNDg4LTEyLjQ4NGMtMi41NDktMi41NjItNi41MDItMy4wODktOS42MzMtMS4yODVsLTE5LjQ3MywxMS4xNTYgICAgYy0xLjM0NC0wLjYxNy0yLjcwMy0xLjE4Ny00LjA2Ni0xLjcwM2wtNS44ODMtMjEuNjI1Yy0wLjg2MS0zLjE3MS0zLjU3NC01LjQ5NC02Ljg0LTUuODU1Yy02LjQ2Mi0wLjcxMS0xMi45ODMtMC43MTEtMTkuNDQ1LDAgICAgYy0zLjI2OCwwLjM2LTUuOTgyLDIuNjgzLTYuODQ0LDUuODU1bC01Ljg4MywyMS42MjVjLTEuMzYzLDAuNTE2LTIuNzIzLDEuMDg2LTQuMDY2LDEuNzAzbC0xOS40NzMtMTEuMTU2ICAgIGMtMy4xMzEtMS44MDUtNy4wODUtMS4yNzgtOS42MzMsMS4yODVsLTEyLjQ4NCwxMi40ODRjLTIuNTU1LDIuNTUyLTMuMDgyLDYuNS0xLjI4NSw5LjYzM2wxMS4xNTYsMTkuNDc2ICAgIGMtMC42MTcsMS4zNDQtMS4xODcsMi43MDMtMS43MDMsNC4wNjZsLTIxLjYyNSw1Ljg3OWMtMy4xNzEsMC44NTktNS40OTMsMy41NzEtNS44NTUsNi44MzZjLTAuNzE1LDYuNDY2LTAuNzE1LDEyLjk5MSwwLDE5LjQ1NyAgICBjMC4zNjIsMy4yNjUsMi42ODUsNS45NzcsNS44NTUsNi44MzZsMjEuNjI1LDUuODgzYzAuNTE2LDEuMzYzLDEuMDg2LDIuNzIzLDEuNzAzLDQuMDY2bC0xMS4xNTYsMTkuNDc3ICAgIGMtMS43OTcsMy4xMzMtMS4yNyw3LjA4MSwxLjI4NSw5LjYzM2wxMi40ODQsMTIuNDg0YzIuNTU0LDIuNTUyLDYuNSwzLjA3OSw5LjYzMywxLjI4NWwxOS40NzMtMTEuMTU2ICAgIGMxLjM0NCwwLjYxNywyLjcwMywxLjE4Nyw0LjA2NiwxLjcwM2w1Ljg4MywyMS42MjVjMC44NjEsMy4xNzEsMy41NzQsNS40OTQsNi44NCw1Ljg1NWM2LjQ2MiwwLjcwOCwxMi45ODMsMC43MDgsMTkuNDQ1LDAgICAgYzMuMjY4LTAuMzYsNS45ODItMi42ODMsNi44NDQtNS44NTVsNS44ODMtMjEuNjI1YzEuMzYzLTAuNTE2LDIuNzIzLTEuMDg2LDQuMDY2LTEuNzAzbDE5LjQ3MywxMS4xNTYgICAgYzMuMTM0LDEuNzkyLDcuMDc5LDEuMjY2LDkuNjMzLTEuMjg1bDEyLjQ4OC0xMi40ODRjMi41NTUtMi41NTIsMy4wODItNi41LDEuMjg1LTkuNjMzbC0xMS4xNTYtMTkuNDc2ICAgIGMwLjYxNy0xLjM0NCwxLjE4NC0yLjY5OSwxLjY5OS00LjA2NmwyMS42MjUtNS44ODNjMy4xNzEtMC44NTksNS40OTMtMy41NzEsNS44NTYtNi44MzYgICAgQzQwOC4wODIsMTIzLjI2Miw0MDguMDgyLDExNi43MzgsNDA3LjM2NywxMTAuMjc0eiBNMzkxLjg1NSwxMjIuNjEzbC0yMC4yODUsNS41MTJjLTIuNjgzLDAuNzI4LTQuNzk1LDIuNzk3LTUuNTc4LDUuNDY1ICAgIGMtMC45NjUsMy4yNDYtMi4yNzMsNi4zNzktMy45MDIsOS4zNDhjLTEuMzMyLDIuNDQtMS4zMDEsNS4zOTcsMC4wODIsNy44MDlsMTAuMjQ2LDE3Ljg4N2wtMy44MzYsMy44MzZsLTE3Ljg4My0xMC4yNDYgICAgYy0yLjQwOC0xLjM4NC01LjM2My0xLjQxNy03LjgwMS0wLjA4NmMtMi45NzEsMS42My02LjEwNywyLjkzOS05LjM1NSwzLjkwNmMtMi42NjYsMC43ODQtNC43MzQsMi44OTQtNS40NjUsNS41NzRsLTUuNTIsMjAuMjg1ICAgIGMtMS43MzQsMC4wNjMtMy40NzQsMC4wNjMtNS4yMTksMGwtNS41MTUtMjAuMjgxYy0wLjcyOC0yLjY4My0yLjc5Ny00Ljc5NS01LjQ2NS01LjU3OGMtMy4yNDgtMC45NjctNi4zODQtMi4yNzYtOS4zNTUtMy45MDYgICAgYy0yLjQzOC0xLjMzMS01LjM5My0xLjI5OC03LjgwMSwwLjA4NmwtMTcuODgzLDEwLjI0NmwtMy44MzYtMy44MzZsMTAuMjQ2LTE3Ljg4N2MxLjM4LTIuNDA5LDEuNDEzLTUuMzYyLDAuMDg2LTcuODAxICAgIGMtMS42My0yLjk3MS0yLjkzOS02LjEwNy0zLjkwNi05LjM1NWMtMC43ODMtMi42NjgtMi44OTUtNC43MzctNS41NzgtNS40NjVsLTIwLjI4NS01LjUxNmMtMC4wNjItMS43MzgtMC4wNjItMy40NzksMC01LjIyM2wwLDAgICAgbDIwLjI4NS01LjUxMmMyLjY4My0wLjcyOCw0Ljc5NS0yLjc5Nyw1LjU3OC01LjQ2NWMwLjk2Ny0zLjI0OCwyLjI3Ni02LjM4NCwzLjkwNi05LjM1NWMxLjMyNy0yLjQzOSwxLjI5NC01LjM5Mi0wLjA4Ni03LjgwMSAgICBsLTEwLjI0Ni0xNy44ODZsMy44MzYtMy44MzZsMTcuODgzLDEwLjI0NmMyLjQwOSwxLjM4LDUuMzYyLDEuNDEzLDcuODAxLDAuMDg2YzIuOTcxLTEuNjMsNi4xMDctMi45MzksOS4zNTUtMy45MDYgICAgYzIuNjY4LTAuNzgzLDQuNzM3LTIuODk1LDUuNDY1LTUuNTc4bDUuNTE2LTIwLjI4MWMxLjc0Mi0wLjA2MywzLjQ4My0wLjA2Myw1LjIyMywwbDUuNTE2LDIwLjI4MSAgICBjMC43MjgsMi42ODMsMi43OTcsNC43OTUsNS40NjUsNS41NzhjMy4yNDgsMC45NjcsNi4zODQsMi4yNzYsOS4zNTUsMy45MDZjMi40MzksMS4zMjcsNS4zOTIsMS4yOTQsNy44MDEtMC4wODZsMTcuODgzLTEwLjI0NiAgICBsMy44MzYsMy44MzZsLTEwLjI0NiwxNy44ODdjLTEuMzgzLDIuNDEyLTEuNDE0LDUuMzY4LTAuMDgyLDcuODA5YzEuNjI5LDIuOTY4LDIuOTM3LDYuMTAyLDMuOTAyLDkuMzQ4ICAgIGMwLjc4MywyLjY2OCwyLjg5NSw0LjczNyw1LjU3OCw1LjQ2NWwyMC4yODUsNS41MTZDMzkxLjkxOCwxMTkuMTI5LDM5MS45MTgsMTIwLjg3LDM5MS44NTUsMTIyLjYxM3oiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTMyMC4wNDcsODhjLTE3LjY3MywwLTMyLDE0LjMyNy0zMiwzMmMwLjAyLDE3LjY2NSwxNC4zMzUsMzEuOTgsMzIsMzJjMTcuNjczLDAsMzItMTQuMzI3LDMyLTMyUzMzNy43Miw4OCwzMjAuMDQ3LDg4eiAgICAgTTMyMC4wNDcsMTM2Yy04LjgzNywwLTE2LTcuMTYzLTE2LTE2YzAuMDA5LTguODMzLDcuMTY3LTE1Ljk5MSwxNi0xNmM4LjgzNywwLDE2LDcuMTYzLDE2LDE2UzMyOC44ODMsMTM2LDMyMC4wNDcsMTM2eiIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSI0MDAiIHk9IjMyIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iNDMyIiB5PSIzMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjOTAwY2NiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yMDgsNDI0SDhjLTQuNDE4LDAtOCwzLjU4Mi04LDh2NDBjMCw0LjQxOCwzLjU4Miw4LDgsOGgyMDBjNC40MTgsMCw4LTMuNTgyLDgtOHYtNDBDMjE2LDQyNy41ODIsMjEyLjQxOCw0MjQsMjA4LDQyNHogICAgIE0yMDAsNDY0SDE2di0yNGgxODRWNDY0eiIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDcyLDBIMTY4Yy00LjQxOCwwLTgsMy41ODItOCw4djE4MC45OWMtNDUuODktMjYuNDY1LTEwNC41NDUtMTAuNzE3LTEzMS4wMSwzNS4xNzMgICAgYy0yNi40NjUsNDUuODktMTAuNzE3LDEwNC41NDUsMzUuMTczLDEzMS4wMWM0NS44OSwyNi40NjUsMTA0LjU0NSwxMC43MTcsMTMxLjAxLTM1LjE3M2M4LjQxNy0xNC41OTYsMTIuODQxLTMxLjE1MSwxMi44MjctNDhoODggICAgdjQ4aC01NmMtNC40MTgsMC04LDMuNTgyLTgsOHY0MGMwLDQuNDE4LDMuNTgyLDgsOCw4aDE2MGM0LjQxOCwwLDgtMy41ODIsOC04di00MGMwLTQuNDE4LTMuNTgyLTgtOC04aC00OHYtNDhoMTIwICAgIGM0LjQxOCwwLDgtMy41ODIsOC04VjhDNDgwLDMuNTgyLDQ3Ni40MTgsMCw0NzIsMHogTTExMiwzNTJjLTQ0LjE4MywwLTgwLTM1LjgxNy04MC04MGMwLTQ0LjE4MywzNS44MTctODAsODAtODBzODAsMzUuODE3LDgwLDgwICAgIEMxOTEuOTUxLDMxNi4xNjIsMTU2LjE2MiwzNTEuOTUxLDExMiwzNTJ6IE0zOTIsMzM2djI0SDI0OHYtMjRIMzkyeiBNMzEyLDMyMHYtNDhoMjR2NDhIMzEyeiBNNDY0LDI1NkgyMDYuNTU1ICAgIGMtMC45MTgtNS40NDQtMi4zMDgtMTAuNzk3LTQuMTU2LTE2SDQ2NFYyNTZ6IE00NjQsMjI0SDE5NS4wMWMtNS4wNzYtOC43My0xMS40OTEtMTYuNjA5LTE5LjAxLTIzLjM1VjE2aDI4OFYyMjR6IiBmaWxsPSIjOTAwY2NiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0xMTIsMjQwYy0xNy42NzMsMC0zMiwxNC4zMjctMzIsMzJjMCwxNy42NzMsMTQuMzI3LDMyLDMyLDMyczMyLTE0LjMyNywzMi0zMkMxNDMuOTgsMjU0LjMzNSwxMjkuNjY1LDI0MC4wMiwxMTIsMjQweiAgICAgTTExMiwyODhjLTguODM3LDAtMTYtNy4xNjMtMTYtMTZzNy4xNjMtMTYsMTYtMTZzMTYsNy4xNjMsMTYsMTZDMTI3Ljk5MSwyODAuODMzLDEyMC44MzMsMjg3Ljk5MSwxMTIsMjg4eiIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSIxNiIgeT0iMzUyIiB3aWR0aD0iMTYiIGhlaWdodD0iNTYiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMTg0IiB5PSIzNTIiIHdpZHRoPSIxNiIgaGVpZ2h0PSI1NiIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSIxNTIiIHk9IjM3NiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjMyIiBmaWxsPSIjOTAwY2NiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjQ4IiB5PSIzNzYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSI4MCIgeT0iMzkyIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiM5MDBjY2IiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMTIwIiB5PSIzOTIiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDY4LjI4NSwzODkuMDljLTE1LjYzMy0xNS41OTQtNDAuOTM3LTE1LjU5NC01Ni41NywwbC0yMi42MjUsMjIuNjI1Yy0xNS41NzgsMTUuNjYzLTE1LjUxLDQwLjk5LDAuMTU0LDU2LjU2OCAgICBjMTUuNjAyLDE1LjUxOCw0MC44MDksMTUuNTE5LDU2LjQxMywwLjAwMmwyMi42MjktMjIuNjI5QzQ4My44ODIsNDMwLjAyNiw0ODMuODgyLDQwNC43Miw0NjguMjg1LDM4OS4wOXogTTQ1MC4yNzMsMzk1Ljc5ICAgIGwtMTUuOTI5LDE1LjkyOWwtMTEuMzE2LTExLjMxNkM0MzAuMjIsMzkzLjI1OCw0NDEuMTI5LDM5MS40MTEsNDUwLjI3MywzOTUuNzl6IE00MzQuMzQ0LDQ1Ni45NzMgICAgYy05LjM2MSw5LjM4NS0yNC41NTgsOS40MDQtMzMuOTQzLDAuMDQzcy05LjQwNC0yNC41NTgtMC4wNDMtMzMuOTQzYzAuMDE1LTAuMDE1LDAuMDMtMC4wMywwLjA0NS0wLjA0NWwxMS4zMTMtMTEuMzEzICAgIGwzMy45NDMsMzMuOTQzTDQzNC4zNDQsNDU2Ljk3M3ogTTQ1Ni45NzMsNDM0LjM0NGwtMC4wMDIsMC4wMDJsLTExLjMxNS0xMS4zMTVsMTUuOTMtMTUuOTMgICAgQzQ2NS45NjQsNDE2LjI0NCw0NjQuMTE3LDQyNy4xNTMsNDU2Ljk3Myw0MzQuMzQ0eiIgZmlsbD0iIzkwMGNjYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
      />
      <ScrollFloater />
      <Greeting />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
