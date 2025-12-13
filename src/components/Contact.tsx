import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                <div className="contact-content">
                    <h3 className="contact-heading">Interested in working together?</h3>
                    <p className="contact-text">
                        I'm currently available for freelance projects and open to new opportunities.
                        If you have a project in mind or just want to say hi, feel free to drop me an email.
                    </p>
                    <a href="mailto:hello@hafizh.dev" className="email-link">hello@hafizh.dev</a>

                    <div className="social-links">
                        <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>

                    <footer className="footer">
                        <p>&copy; {new Date().getFullYear()} Hafizh Kanz. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </section>
    );
};

export default Contact;
