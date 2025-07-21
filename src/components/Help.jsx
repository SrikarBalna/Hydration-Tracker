import { useState } from "react";
import "../styles/Help.css";
import Navbar from "../components/Navbar";
function Help() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How do I track my water intake?",
      answer:
        "Click the water add button on the homepage to log your daily water consumption.",
    },
    {
      question: "How much water should I drink daily?",
      answer:
        "It varies based on weight and activity. Generally, aim for 2-3 liters per day unless advised otherwise.",
    },
    {
      question: "Can I view past hydration records?",
      answer:
        "Yes, use the history tab to see your previous water intake logs.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    
    <div className="help-wrapper">
      <Navbar />
      <div className="help-container">
        <h1 className="help-title">Help & FAQ</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button onClick={() => toggleFAQ(index)} className="faq-question">
                {faq.question}
              </button>
              {openFAQ === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div className="contact-box">
          <h2>Contact Us</h2>
          <p>Email: support@hydrotracker.com</p>
          <p>Phone: +91 9********0</p>
          <p>Location: India</p>
        </div>
      </div>
    </div>
  );
}

export default Help;