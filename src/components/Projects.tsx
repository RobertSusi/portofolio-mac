import React from 'react';
import './Projects.css';

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    link: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'E-Commerce Dashboard',
        category: 'React / TypeScript',
        description: 'A comprehensive dashboard for managing products and analytics with real-time data visualization.',
        link: '#'
    },
    {
        id: 2,
        title: 'Task Management App',
        category: 'Vite / Tailwind',
        description: 'A drag-and-drop task manager focused on productivity and simplicity.',
        link: '#'
    },
    {
        id: 3,
        title: 'Portfolio v1',
        category: 'HTML / SCSS',
        description: 'My previous portfolio website showcasing early works and experiments.',
        link: '#'
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Selected Work</h2>
                <div className="project-grid">
                    {projects.map((project) => (
                        <a href={project.link} key={project.id} className="project-card">
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <span className="project-link">View Project &rarr;</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
