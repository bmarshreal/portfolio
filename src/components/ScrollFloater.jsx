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
        <Button
          className="floaterBtn"
          onClick={topScroll}
          type="button"

          // onScroll={scroller}
        >
          ⌃
        </Button>
      ) : null}
    </div>
  );
}

export default ScrollFloater;
