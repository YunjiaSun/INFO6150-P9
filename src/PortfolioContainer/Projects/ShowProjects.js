import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "./ProjectList";
import "./ShowProjects.css";

function ShowProjects() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">
            <img src={project.image} />
            <h1> {project.name}</h1>
            <h3> {project.type}</h3>
            <div className="projectInfo">
                <p>Overview: {project.overview}</p>
                <p>{project.stackInfo1}</p>
                <p>{project.stackInfo2}</p>
            </div>
        </div>
    );
}
export default ShowProjects;