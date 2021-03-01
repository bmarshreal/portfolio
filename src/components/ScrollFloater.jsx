import React, { useState, useEffect } from "react";

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
      {/* {scroll ? (
        <button
          className="floaterScrollBtn"
          onClick={topScroll}
          type="button"

          // onScroll={scroller}
        >
          ⇪
        </button>
      ) : null} */}
      {scroll ? (
        <img
          className="floaterScrollBtn"
          style={{
            border: " 4px solid white",
            position: "fixed",
            backgroundColor: "white",
            zIndex: "1000",
            left: " 80%",
            top: "88%",
            borderRadius: "70%",
            height: "3.5rem",
            width: "3.5rem",
            fontSize: "2rem",
            color: "white",
            opacity: "80%",
            fontWeight: "800",
          }}
          onClick={topScroll}
          alt="floaterScrollBtn"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDMzMCAzMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJYTUxJRF85XyIgZD0iTTE2NSwwQzc0LjAxOSwwLDAsNzQuMDE5LDAsMTY1czc0LjAxOSwxNjUsMTY1LDE2NXMxNjUtNzQuMDE5LDE2NS0xNjVTMjU1Ljk4MSwwLDE2NSwweiBNMjU1LjYwNiwyMDUuNjA2ICBDMjUyLjY3OCwyMDguNTM1LDI0OC44MzksMjEwLDI0NSwyMTBzLTcuNjc4LTEuNDY0LTEwLjYwNi00LjM5NGwtNjkuMzk2LTY5LjM5M2wtNjkuMzkyLDY5LjM5M2MtNS44NTcsNS44NTgtMTUuMzU1LDUuODU4LTIxLjIxMywwICBjLTUuODU4LTUuODU3LTUuODU4LTE1LjM1NSwwLTIxLjIxM2w3OS45OTgtODBjMi44MTMtMi44MTMsNi42MjgtNC4zOTQsMTAuNjA2LTQuMzk0YzMuOTc5LDAsNy43OTMsMS41OCwxMC42MDcsNC4zOTRsODAuMDAyLDgwICBDMjYxLjQ2NSwxOTAuMjUxLDI2MS40NjUsMTk5Ljc0OSwyNTUuNjA2LDIwNS42MDZ6IiBmaWxsPSIjOTAwY2NiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
        />
      ) : null}
    </div>
  );
}

export default ScrollFloater;
