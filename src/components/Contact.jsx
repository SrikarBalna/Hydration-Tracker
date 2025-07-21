import React from "react";
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-wrapper">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message!</p>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="tel" name="num" placeholder="Phone Number" pattern="[0-9]{10}" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" rows="5" required />
          </div>
          <button type="submit">Send Message</button>
        </form>
        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
