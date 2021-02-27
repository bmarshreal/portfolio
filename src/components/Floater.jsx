import React, { useState, useEffect } from "react";

function Floater(props) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    function scroller() {
      let scrollEX = Math.round(window.scrollY);
      if (scrollEX > 100) {
        setScroll(true);
      }
      // console.log(scroll);
    }
    window.addEventListener("scroll", scroller);
    return () => {
      console.log("Floater Mounted");
      setScroll(false);
    };
  }, []);

  function topScroll() {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      {/* <a href="http://www.github.com">
        <img
          className="floaterLinks"
          style={{ top: "68%" }}
          alt="githubImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDU2OC4wMzQgNTY4LjAzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNTUwLjk5LDBIMTcuMDUxQzguOTQ4LDAsMi4zODEsNi41NjcsMi4zODEsMTQuNjd2NTM4LjY5NGMwLDguMTA0LDYuNTY3LDE0LjY3LDE0LjY3LDE0LjY3aDE3Ny40OTh2LTAuMTI5ICAgIGM4LjAxMS0wLjA5MiwxNC4xNDktNC41NzcsMTQuNDMxLTEyLjE2NmMwLjcyOC0xOS43MjUsMC4yMTQtMzkuNDkyLDAuMjE0LTU4LjU2MmMtMTQuMjk2LDAuNjY3LTI3Ljk0NCwyLjQ3My00MS40MzgsMS42OTUgICAgYy0yOS43NjItMS43MTQtNTIuNjMyLTE0LjQxMy02NC40OTMtNDMuNTU2Yy03LjAyNi0xNy4yNjUtMTcuNjEzLTMyLjAzMi0zNC4xMDEtNDEuODg2Yy0zLjA3OS0xLjg0Mi01Ljc3MS00LjU1NC04LjEyNy03LjMwOCAgICBjLTMuMDc5LTMuNTkyLTIuNTAzLTcuMjgyLDIuMzYyLTguMjY4YzQuOTA4LTAuOTk4LDEwLjI3LTEuNjk1LDE1LjExLTAuNzljMTkuMDA5LDMuNTY4LDMyLjE1NCwxNS40OSw0Mi4yMTYsMzEuMzQ3ICAgIGMxOS44OTYsMzEuMzcxLDUwLjUyMSw0MC45NzQsODQuOTc2LDI2LjQ4N2MxLjkyMS0wLjgwOCw0LjM2My0yLjc2Niw0LjcyNS00LjU1M2MyLjc3OC0xMy44ODcsNy45NjgtMjYuNTQ5LDE4LjQyNy0zNy42NSAgICBjLTExLjYyOC0yLjE1NC0yMi4zOTktMy43MzktMzIuOTYyLTYuMTg4Yy0zMC40MTctNy4wMzgtNTcuNzQyLTE5LjctNzcuNzI0LTQ0Ljg0OGMtMTYuMzAzLTIwLjUxNC0yMy43NTgtNDQuNTI4LTI3LjE4NS03MC4wODYgICAgYy01LjM2Ny00MC4wMzEtMC41NjMtNzcuNTAzLDI2LjkyOC0xMDkuNDkzYzEuMzg5LTEuNjE2LDIuMTQyLTQuOTI3LDEuNTI0LTYuOTRjLTYuODg1LTIyLjQ5Ny01LjgzMy00NC44MDUsMC45OTEtNjcuMDUxICAgIGMzLjU4MS0xMS42ODMsNC41NzgtMTIuMjY1LDE2LjUtMTAuNjM3YzAuNzI5LDAuMDk4LDEuNDM4LDAuMjgxLDIuMTYxLDAuNDA0YzIzLjg5OCwzLjk1NCw0NC40NjgsMTUuNTI2LDY0LjczMSwyNy45NSAgICBjMi43MjQsMS42NzEsNi44NzMsMi43MTEsOS44NjYsMS45ODNjNDguMzk3LTExLjc0NCw5Ni43MDItMTEuNjk1LDE0NS4wOTMsMC4wNDNjMi44MDksMC42NzksNi41NjEtMC4yODgsOS4yNDctMS42OTUgICAgYzExLjAxNi01Ljc1OSwyMS41NjEtMTIuNDU0LDMyLjcxOC0xNy45MTRjMTIuOTgtNi4zNDYsMjYuNjUyLTExLjEyLDQxLjM3MS0xMC44NTdjMi41NzYsMC4wNDksNi41NjEsMi41MDksNy40MjMsNC43ODYgICAgYzguODU2LDIzLjQ2NCwxMC43MjMsNDcuMzc1LDMuNjY2LDcxLjc5NGMtMC43NTMsMi42MDcsMC4zNjcsNi4zMjIsMS43NjksOC44OTJjNi45NjUsMTIuNzc5LDE2LjY4OSwyNC41NzIsMjEuMDk2LDM4LjEyNyAgICBjMTMuNDM0LDQxLjMxNiw4LjUzOCw4Mi4yMjktOS43NDksMTIxLjA2Yy0xNi43NTcsMzUuNTk0LTQ3LjgzNCw1My42My04NC42MjEsNjIuOTMzYy0xMi40MjQsMy4xNC0yNS4xNTMsNS4wNDktMzguNTU2LDcuNjgxICAgIGMxNy41NjQsMTguMzQ4LDIwLjMxOCw0MC43NCwyMC4wMDYsNjQuMTkyYy0wLjMyNCwyNC4xOTItMC4yMzgsNDguMzkxLTAuMjUxLDcyLjU4OWMtMC4wMDYsMTEuNzIsNS4xMSwxOC4xOTUsMTQuMDM5LDE4LjU3NCAgICBjLTAuMDA2LDAuMDM3LDE4OC43MjMsMC4wMzcsMTg4LjcyMywwLjAzN1YxNC42N0M1NjUuNjUzLDYuNTY3LDU1OS4wODcsMCw1NTAuOTksMHoiIGZpbGw9IiNmZDUwMmEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
        />
      </a>
      <a href="http://www.yahoo.com">
        <img
          className="floaterLinks"
          style={{ top: "78%" }}
          alt="yahooImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik0wLDB2NDU1aDQ1NVYwSDB6IE0zMjMuNzMzLDE3OS43MjVjLTcuNzA5LDIuMDgzLTc4LjIzOCw1Ni43Ny04Mi44ODQsNzAuMTg4ICBjLTEuMDI4LDQuNjI5LDAuMTAxLDQ5LjU3NywxLjEyOSw1Ni4zMTFjNC42NDYsMS4wNDEsMzguMTk0LDAuMTM2LDQ0LjM0NSwxLjE1OWwtMC43MzUsMTMuODk1ICBjLTYuMDMzLTAuNDU5LTQ4LjY1NC0wLjM0MS03Mi45NzEtMC4zNDFjLTEyLjM3MywwLTUyLjEwNiwxLjM1Mi02NC4zMTMsMS4wMDZsMi4zMS0xMy4yMjZjNi42OTgtMC40OTQsMzQuNDE4LDEuMjI5LDQwLjQ4Ni01LjI0NiAgYzMuMDIzLTMuMjE2LDIuMDY1LTQ1LjkzOCwxLjA0MS01My4xNTJjLTIuNTY0LTcuNzIyLTY0LjM2LTg1LjE3Mi04MC41MDktOTcuODU1SDcwVjEzM2gxNDAuMzc2djEuMzUyICBjMC4xMTgsMCwwLjM1OSwwLjAxMywwLjQ3NywwLjAzMWwtMC40NzcsMy4yOTl2MTQuNzgzaC00Mi4zMzNjMTguODY5LDI3LjYwMiw0NS45Miw2MC45MDksNTcuNDU3LDc2LjkwNGw1Ni41NTEtNTEuMjM2aC0zMy42MTcgIGwtNC43MzQtMTkuNDQ3aDEyMy4xMTdsLTAuOTA2LDEuMzgzYzAuMTAxLDAsMC4yODksMC4wMTgsMC40MjQsMC4wMThsLTguNzgxLDEyLjc2NmMtMC4wODgsMC0wLjIyMywwLjAxOC0wLjI5MywwLjAzNWwtMy41MzUsNS4yNDYgIGgtMjIuNzE1QzMyOC4wNzMsMTc4Ljc4NSwzMjUuNDc4LDE3OS4zNjYsMzIzLjczMywxNzkuNzI1eiBNMzYwLjg4NSwzMjEuOTk2bC0xMC4zMDMtMC43NTJsLTkuNTczLTAuODM2bC0wLjEwMS0yMC43ODEgIGwxMi4xMzIsMS40ODhsMTAuODU0LDAuNTI5TDM2MC44ODUsMzIxLjk5NnogTTM2My4wMzgsMjg3LjQ3N2wtMTguODgzLTEuNTIybC0wLjUxMi04Ny44MjRjNC4zNCwwLjg1MywzNy42ODIsNC4wMTYsNDEuMzU3LDQuMTM0ICBMMzYzLjAzOCwyODcuNDc3eiIgZmlsbD0iI2ZkNTAyYSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
        />
      </a>
      <a href="http://www.facebook.com">
        <img
          className="floaterLinks"
          style={{ top: "88%" }}
          alt="facebookImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQ4My43MzgyODEgMGgtNDU1LjVjLTE1LjU5NzY1Ni4wMDc4MTI1LTI4LjI0MjE4NzI1IDEyLjY2MDE1Ni0yOC4yMzgyODEgMjguMjYxNzE5djQ1NS41Yy4wMDc4MTI1IDE1LjU5NzY1NiAxMi42NjAxNTYgMjguMjQyMTg3IDI4LjI2MTcxOSAyOC4yMzgyODFoNDU1LjQ3NjU2MmMxNS42MDU0NjkuMDAzOTA2IDI4LjI1NzgxMy0xMi42NDQ1MzEgMjguMjYxNzE5LTI4LjI1IDAtLjAwMzkwNiAwLS4wMDc4MTIgMC0uMDExNzE5di00NTUuNWMtLjAwNzgxMi0xNS41OTc2NTYtMTIuNjYwMTU2LTI4LjI0MjE4NzI1LTI4LjI2MTcxOS0yOC4yMzgyODF6bTAgMCIgZmlsbD0iI2ZkNTAyYSIgZGF0YS1vcmlnaW5hbD0iIzQyNjdiMiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTM1My41IDUxMnYtMTk4aDY2Ljc1bDEwLTc3LjVoLTc2Ljc1di00OS4zNTkzNzVjMC0yMi4zODY3MTkgNi4yMTQ4NDQtMzcuNjQwNjI1IDM4LjMxNjQwNi0zNy42NDA2MjVoNDAuNjgzNTk0di02OS4xMjg5MDZjLTcuMDc4MTI1LS45NDE0MDYtMzEuMzYzMjgxLTMuMDQ2ODc1LTU5LjYyMTA5NC0zLjA0Njg3NS01OSAwLTk5LjM3ODkwNiAzNi05OS4zNzg5MDYgMTAyLjE0MDYyNXY1Ny4wMzUxNTZoLTY2LjV2NzcuNWg2Ni41djE5OHptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
        />
      </a> */}
      {scroll ? (
        <button
          className="floaterBtn"
          onClick={topScroll}
          type="button"

          // onScroll={scroller}
        >
          ⇪
        </button>
      ) : null}
    </div>
  );
}

export default Floater;
