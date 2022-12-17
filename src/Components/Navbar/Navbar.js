import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar" >
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/education"> Education </Link>
                <Link to="/work"> Work </Link>
            </div>
        </div>
    );
}

export default Navbar;