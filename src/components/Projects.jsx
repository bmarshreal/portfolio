import React from "react";
import ProjectCards from "./ProjectCards";

function Projects(params) {
  return (
    <div id="projects" className="projects">
      <div style={{ marginBottom: "4rem" }}>
        <h3>Projects</h3>
        <p style={{ fontSize: "1.5rem" }}>
          Here are a few of my more recent projects.
        </p>
      </div>
      <ProjectCards />
    </div>
  );
}

export default Projects;
