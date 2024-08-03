import React, { useState } from 'react';
import '../Pages/calculatorStyle.css';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'Clear') {
      setInput('');
    } else if (value === 'Del') {
      setInput(input.slice(0, -1));
    } else if (value === 'x^2') {
      squareNumber();
    } else if (value === 'x^y') {
      setInput(input + '**');
    } else if (value === '√') {
      sqrtNumber();
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const squareNumber = () => {
    try {
      const result = eval(input);
      setInput((result * result).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const sqrtNumber = () => {
    try {
      const result = eval(input);
      setInput(Math.sqrt(result).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
    <div className="calculator">
      <div className="display">
        {input}
      </div>
      <div className="buttons">
        {['Clear', 'Del', '+/-', 'x^2'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['1', '2', '3', '+'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['4', '5', '6', '÷'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['7', '8', '9', '-'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['0', 'x^y', '√', '*'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['.', '='].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Calculator;
