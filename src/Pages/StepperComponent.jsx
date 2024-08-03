import React, { useState } from 'react';
import '../Pages/stepperComponent.css';

const StepperComponent = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [completed, setCompleted] = useState(false);
    const steps = [
      { label: 'Order Placed', icon: '📦' },
      { label: 'Shipped', icon: '🚚' },
      { label: 'Out for Delivery', icon: '📬' },
      { label: 'Delivered', icon: '🏠' },
    ];
  
    const handleNext = () => {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        setCompleted(true);
      }
    };
  
    const handleBack = () => {
      setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
    };
  
    const handleReset = () => {
      setCurrentStep(0);
      setCompleted(false);
    };
  
    return (
      <div className="order-stepper-container">
        {completed ? (
          <div className="success-message">
            <div>Order Process Completed Successfully! 🎉</div>
            <button onClick={handleReset}>Restart</button>
          </div>
        ) : (
          <>
            <div className="order-stepper">
              {steps.map((step, index) => (
                <div key={index} className={`order-step ${index <= currentStep ? 'active' : ''}`}>
                  <div className="order-step-icon">{step.icon}</div>
                  <div className="order-step-label">{step.label}</div>
                  {index < steps.length - 1 && (
                    <div className={`order-step-line ${index < currentStep ? 'completed' : ''}`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="order-stepper-buttons">
              <button onClick={handleBack} disabled={currentStep === 0}>
                Back
              </button>
              <button onClick={handleNext}>
                {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </>
        )}
      </div>
    );
};

export default StepperComponent;
