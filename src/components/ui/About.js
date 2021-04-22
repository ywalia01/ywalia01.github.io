import React from "react";
import { ABOUT } from '../../data';

const About = () => {
    return (
        <section id="about">
            <h1>About</h1>
            <div>
                {ABOUT.map(para => (
                    <p>
                        {para.text}
                    </p>
                ))}
            </div>
      </section>
    );
};

export default About;
