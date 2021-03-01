import React, { useState, useEffect } from "react";
import "../App.css";
import { Button } from "react-bootstrap";

function ScrollFloater(props) {
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
      {scroll ? (
        <Button
          style={{
            height: "52px",
            width: "52px",
            borderRadius: "70%",
            zIndex: "1000",
            backgroundColor: "#900ccb",
            position: "fixed",
            left: "85%",
            top: "88%",
            fontSize: "3rem",
            color: "white",
            opacity: "75%",
            fontWeight: "800",
          }}
          className="floaterBtn"
          onClick={topScroll}
          type="button"

          // onScroll={scroller}
        >
          <p
            style={{
              position: "relative",
              bottom: "55%",
              right: "12%",
            }}
          >
            {" "}
            ⇪
          </p>
        </Button>
      ) : null}
    </div>
  );
}

export default ScrollFloater;
