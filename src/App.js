import React, {useState} from "react";
import Home from "./PortfolioContainer/Home/Home";
import Projects from "./PortfolioContainer/Projects/Projects";
import Education from "./PortfolioContainer/AboutMe/Education";
import Work from "./PortfolioContainer/AboutMe/Work";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ShowProjects from "./PortfolioContainer/Projects/ShowProjects";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<ShowProjects />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/work" element={<Work />} />
                </Routes>
            </Router>
        </div>
    );

}

export default App;
