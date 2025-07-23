import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Accordion from '../components/Accordian';
import ContactForm from '../components/ContactForm';
import { faqs } from '../mockData/mockData'
import '../styles/Help.css';
import Navbar from './Navbar';

const Help = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="help-hero-section">
        <div className="help-hero-container">
          <h1 className="help-hero-title">
            How Can We <span className="help-hero-highlight">Help?</span>
          </h1>
          <p className="help-hero-description">
            Find answers to common questions or get in touch with our support team. 
            We're here to help you make the most of your Hydrotracker experience.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="help-faq-section">
        <div className="help-faq-container">
          <div className="help-faq-header">
            <h2 className="help-faq-title">
              Frequently Asked Questions
            </h2>
            <p className="help-faq-description">
              Quick answers to the most common questions about HydroTracker
            </p>
          </div>

          <div className="help-faq-content">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="help-contact-section">
        <div className="help-contact-container">
          <div className="help-contact-header">
            <h2 className="help-contact-title">
              Get In Touch
            </h2>
            <p className="help-contact-description">
              Still have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="help-contact-grid">
            {/* Contact Form */}
            <div className="help-contact-form">
              <ContactForm title="Send us a Message" />
            </div>

            {/* Contact Details */}
            <div className="help-contact-details">
              <div className="help-contact-info-card">
                <h3 className="help-contact-info-title">Contact Information</h3>
                
                <div className="help-contact-info-list">
                  <div className="help-contact-info-item">
                    <Mail className="help-contact-info-icon" />
                    <div className="help-contact-info-content">
                      <h4 className="help-contact-info-label">Email</h4>
                      <p className="help-contact-info-value">#contact@hydrotracker.com</p>
                      <p className="help-contact-info-note">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="help-contact-info-item">
                    <Phone className="help-contact-info-icon" />
                    <div className="help-contact-info-content"> 
                      <h4 className="help-contact-info-label">Phone</h4>
                      <p className="help-contact-info-value">+91 123-4567-890</p>
                      <p className="help-contact-info-note">Monday - Friday, 9am - 5pm EST</p>
                    </div>
                  </div>

                  <div className="help-contact-info-item">
                    <MapPin className="help-contact-info-icon" />
                    <div className="help-contact-info-content">
                      <h4 className="help-contact-info-label">Address</h4>
                      <p className="help-contact-info-value">123 Health Street<br />Wellness City, WC 12345</p>
                    </div>
                  </div>

                  <div className="help-contact-info-item">
                    <Clock className="help-contact-info-icon" />
                    <div className="help-contact-info-content">
                      <h4 className="help-contact-info-label">Support Hours</h4>
                      <p className="help-contact-info-value">Monday - Friday: 9:00 AM - 5:00 PM IST<br />
                      Saturday - Sunday: 10:00 AM - 2:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="help-map-placeholder">
                <div className="help-map-content">
                  <div className="help-map-text">
                    <MapPin className="help-map-icon" />
                    <p className="help-map-title">Interactive Map</p>
                    <p className="help-map-subtitle">Find us at our headquarters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="help-support-section">
        <div className="help-support-container">
          <div className="help-support-header">
            <h2 className="help-support-title">
              More Ways to Get Help
            </h2>
          </div>

          <div className="help-support-grid">
            <div className="help-support-card">
              <div className="help-support-icon-container">
                <Mail className="help-support-icon" />
              </div>
              <h3 className="help-support-card-title">Email Support</h3>
              <p className="help-support-card-description">Get detailed help via email with our support team.</p>
              <a href="#" className="help-support-card-link">
                Send Email →
              </a>
            </div>

            <div className="help-support-card">
              <div className="help-support-icon-container">
                <Phone className="help-support-icon" />
              </div>
              <h3 className="help-support-card-title">Live Chat</h3>
              <p className="help-support-card-description">Chat with our support team in real-time.</p>
              <a href="#" className="help-support-card-link">
                Start Chat →
              </a>
            </div>

            <div className="help-support-card">
              <div className="help-support-icon-container">
                <Clock className="help-support-icon" />
              </div>
              <h3 className="help-support-card-title">Help Center</h3>
              <p className="help-support-card-description">Browse our comprehensive help documentation.</p>
              <a href="#" className="help-support-card-link">
                Visit Help Center →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;