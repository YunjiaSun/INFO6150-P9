import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

function ProjectItem({ name, id, image}) {
    const navigate = useNavigate();
    return (
        <div
            className="projectItem"
            onClick={() => {
                navigate("/project/" + id);
            }}
        >
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h5> {name} </h5>
        </div>
    );
}

export default ProjectItem;
