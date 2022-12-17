import React from "react";
import { ProjectList } from "./ProjectList";
import ProjectItem from "./ProjectItem";
import "./Projects.css";

function Projects() {
  return (
      <div className="projects">
        <div className="projectList">
          {ProjectList.map((project, index) => {
            return (
                <ProjectItem id={index} name={project.name} image={project.image}/>
            );
          })}
        </div>
      </div>
  );
}

export default Projects;

