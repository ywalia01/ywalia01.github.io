import React from "react";
import './Skills.css';
import { SKILLS } from '../../data';

const Skills = () => {
    return (
        <section id="skills">
            <h1>Skills</h1>
            <div className="skills-grid">
                {SKILLS.map(skill => (
                    <div>
                        <img src={skill.svg} alt={skill.name}></img>
                        {/* <i className={skill.icon}></i> */}
                        <h4>{skill.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
