import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About</h2>
                <div className="about-content">
                    <p className="about-text">
                        I'm a passionate developer who enjoys bridging the gap between engineering and design.
                        I prioritize clean code, accessibility, and performance. When I'm not coding,
                        I'm exploring new web technologies or refining my design eye.
                    </p>
                    <div className="skills">
                        <h3>Tech Stack</h3>
                        <ul className="skills-list">
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Vite</li>
                            <li>CSS / Sass</li>
                            <li>Node.js</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
