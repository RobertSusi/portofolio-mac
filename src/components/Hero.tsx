import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero section">
            <div className="container hero-content">
                <h1 className="hero-title">
                    Hi, I'm Hafizh.<br />
                    I build <span className="highlight">minimalist</span> & <span className="highlight">functional</span> web experiences.
                </h1>
                <p className="hero-subtitle">
                    Frontend Developer based in Indonesia. Specializing in React & TypeScript.
                </p>
                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">View Work</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
