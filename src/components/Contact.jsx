import React from "react";
import '../styles/contact.css'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import LinkedIn and GitHub icons

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="title">Contact Us</h1>
            <p className="text">If you have any questions or feedback, feel free to reach out!</p>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                
                <label htmlFor="num">Ph No:</label>
                <input type="tel" id="num" name="num" pattern="[0-9]{10}" required />
                <br />
                <button type="submit">Send</button>
            </form>
            <div className="social-media">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{marginLeft: "15px"}}>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
        </div>
    );
}

export default Contact;
