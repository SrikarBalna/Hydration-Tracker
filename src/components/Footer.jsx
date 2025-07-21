import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-icons">
          <a href="#" className="footer-icon"><FaFacebookF size={24} /></a>
          <a href="#" className="footer-icon"><FaTwitter size={24} /></a>
          <a href="#" className="footer-icon"><FaLinkedinIn size={24} /></a>
          <a href="#" className="footer-icon"><FaInstagram size={24} /></a>
        </div>
        <p className="footer-text">©️ 2025 Hydro Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;