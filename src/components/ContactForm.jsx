import React, { useState } from 'react';
import { Send } from 'lucide-react';
import '../styles/ContactForm.css';

const ContactForm = ({ title = "Get In Touch", className = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`contact-form ${className}`}>
      <h3 className="contact-form-title">{title}</h3>
      <form onSubmit={handleSubmit} className="contact-form-form">
        <div className="contact-form-group">
          <label htmlFor="name" className="contact-form-label">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-form-input"
            placeholder="Your full name"
          />
        </div>
        
        <div className="contact-form-group">
          <label htmlFor="email" className="contact-form-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-form-input"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div className="contact-form-group">
          <label htmlFor="message" className="contact-form-label">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="contact-form-textarea"
            placeholder="Tell us how we can help you..."
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="contact-form-submit"
        >
          <Send className="contact-form-submit-icon" />
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;