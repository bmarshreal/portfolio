import React, { useState, useEffect } from "react";
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
        <button
          className="floaterScrollBtn"
          style={{
            fontSize: "2rem",
            backgroundColor: "#900ccb",
            borderRadius: "55%",
            zIndex: "3000",
            position: "fixed",
            border: "4px solid white",
          }}
          onClick={topScroll}
          type="button"
        >
          ⌃
        </button>
      ) : (
        <button
          className="hidden"
          style={
            {
              // fontSize: "2rem",
              // backgroundColor: "#900ccb",
              // borderRadius: "55%",
              // zIndex: "3000",
              // position: "fixed",
              // border: "4px solid white",
            }
          }
          onClick={topScroll}
          type="button"
        >
          ⌃
        </button>
      )}
    </div>
  );
}

export default ScrollFloater;
