import React from "react";
import './Container.css';
import Landing from "../Landing/Landing";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";

const Container = () => {
    return (
        <div className="container">
            <Landing />
            <About />
            <Skills />
            <Work />
            <Contact />
        </div>
    );
};

export default Container;
