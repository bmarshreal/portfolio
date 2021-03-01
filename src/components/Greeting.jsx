import React from "react";
import SkillCards from "./SkillCards";

function Greeting(params) {
  return (
    <div style={{ position: "relative" }}>
      <div className="greet">
        <h1>Hi, It's nice to meet you.</h1>
        <p className="greetPhrase">
          {" "}
          I first realized my passion for software development while attaining
          my associates degree in Electrical Engineering. From then on, I've
          been hooked on programming, whether it's firmware in C or software in
          Javascript. I am drawn to technologies that pique my interest and I am
          constantly looking to learn new and exciting things.
        </p>
      </div>
      <div className="skillCards" style={{ position: "absolute" }}>
        <SkillCards />
      </div>
    </div>
  );
}

export default Greeting;
