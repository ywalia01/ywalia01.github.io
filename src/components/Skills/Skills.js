import React from "react";
import './Skills.css';
import { SKILLS } from '../../Util/data';

const Skills = () => {
    return (
        <section id="skills">
            <h1>Skills</h1>
            <div className="skills-grid">
                {SKILLS.map(skill => (
                    <div>
                        <div className="img-container">
                            <img src={skill.svg} alt={skill.name}></img>
                        </div>
                        {/* <i className={skill.icon}></i> */}
                        <h4>{skill.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
