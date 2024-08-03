import React, { useState } from 'react';
import '../Pages/accordionStyle.css';

const AccordionComponent = () => {
    const [expanded, setExpanded] = useState([]);
    const [allowMultiple, setAllowMultiple] = useState(true);
    const [clicked, setClicked] = useState(null);
  
    const toggleAccordion = (index) => {
      if (allowMultiple) {
        setExpanded((prev) => 
          prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
      } else {
        setExpanded((prev) =>
          prev.includes(index) ? [] : [index]
        );
      }
    };
  
    const handleCheckboxChange = () => {
      setAllowMultiple(!allowMultiple);
    };
  
    const handleButtonClick = (index) => {
      setClicked(clicked === index ? null : index);
    };
  
    return (
      <div className="accordion-container">
        <label>
          <input 
            type="checkbox" 
            checked={allowMultiple} 
            onChange={handleCheckboxChange} 
          />
          Is multiple open accordion allowed?
        </label>
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(0)}>
            Do I have to allow the use of cookies?
          </div>
          {expanded.includes(0) && (
            <div className="accordion-content">
              {/* Content for the first question */}
              <button className="show-more-button" onClick={() => handleButtonClick(0)}>
                {clicked === 0 ? 'Show Less' : 'Show More'}
              </button>
              {clicked === 0 && (
                <div className="additional-text">
                  Additional text for the first question.
                </div>
              )}
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(1)}>
            How do I change my My Page password?
          </div>
          {expanded.includes(1) && (
            <div className="accordion-content">
              {/* Content for the second question */}
              <button className="show-more-button" onClick={() => handleButtonClick(1)}>
                {clicked === 1 ? 'Show Less' : 'Show More'}
              </button>
              {clicked === 1 && (
                <div className="additional-text">
                  Additional text for the second question.
                </div>
              )}
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(2)}>
            What is BankID?
          </div>
          {expanded.includes(2) && (
            <div className="accordion-content">
              {/* Content for the third question */}
              <button className="show-more-button" onClick={() => handleButtonClick(2)}>
                {clicked === 2 ? 'Show Less' : 'Show More'}
              </button>
              {clicked === 2 && (
                <div className="additional-text">
                  Additional text for the third question.
                </div>
              )}
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(3)}>
            Whose birth number can I use?
          </div>
          {expanded.includes(3) && (
            <div className="accordion-content">
              {/* Content for the fourth question */}
              <button className="show-more-button" onClick={() => handleButtonClick(3)}>
                {clicked === 3 ? 'Show Less' : 'Show More'}
              </button>
              {clicked === 3 && (
                <div className="additional-text">
                  Additional text for the fourth question.
                </div>
              )}
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(4)}>
            When do I receive a password ordered by letter?
          </div>
          {expanded.includes(4) && (
            <div className="accordion-content">
              {/* Content for the fifth question */}
              <button className="show-more-button" onClick={() => handleButtonClick(4)}>
                {clicked === 4 ? 'Show Less' : 'Show More'}
              </button>
              {clicked === 4 && (
                <div className="additional-text">
                  Additional text for the fifth question.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };
  

export default AccordionComponent;
