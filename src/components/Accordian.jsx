import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/Accordian.css';

const Accordion = ({ items, className = "" }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="accordion-item"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="accordion-button"
          >
            <span className="accordion-question">{item.question}</span>
            <ChevronDown
              className={`accordion-icon ${
                openItems.has(item.id) ? 'open' : ''
              }`}
            />
          </button>
          {openItems.has(item.id) && (
            <div className="accordion-content">
              <p className="accordion-answer">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;