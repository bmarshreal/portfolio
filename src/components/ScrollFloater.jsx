import React, { useState, useEffect } from "react";
import "../App.css";
import { Button } from "react-bootstrap";

function ScrollFloater(props) {
  const [scroll, setScroll] = useState(true);

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
      {scroll ? (
        <Button
          style={{
            height: "52px",
            width: "52px",
            borderRadius: "70%",
            zIndex: "1000",
            backgroundColor: "#900ccb",
            position: "fixed",
            left: "80%",
            top: "88%",
            fontSize: "2rem",
            color: "white",
            opacity: "75%",
            fontWeight: "800",
          }}
          //          border: 2px solid white;
          // position: fixed;
          // background-color: #900ccb;
          // z-index: 1000;
          // left: 95%;
          // top: 88%;
          // border-radius: 70%;
          // height: 52px;
          // width: 52px;
          // font-size: 2rem;
          // color: white;
          // opacity: 80%;
          // font-weight: 800;
          className="floaterBtn"
          onClick={topScroll}
          type="button"

          // onScroll={scroller}
        >
          ⇪
        </Button>
      ) : null}
    </div>
  );
}

export default ScrollFloater;
