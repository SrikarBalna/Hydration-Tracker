import React from "react";
import '../styles/contact.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import Navbar from "../components/Navbar";

function Contact() {
    return (
        <>
        <Navbar />
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
                    <FontAwesomeIcon icon={faLinkedin} size="36px" />
                </a>
                {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{marginLeft: "15px"}}>
                    <FontAwesomeIcon icon={faGithub} size="36px" />
                </a> */}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FontAwesomeIcon icon={faXTwitter} size="36px" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} size="36px"/>
                </a>
            </div>
        </div>
    </>
    );
}

export default Contact;
