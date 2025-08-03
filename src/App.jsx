import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString()); // ⚠️ Note: eval is dangerous for real apps
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={handleClear} className="clear">C</button>
        <button onClick={() => handleClick('/')}>÷</button>
        <button onClick={() => handleClick('*')}>×</button>
        <button onClick={() => handleClick('-')}>−</button>

        {[1, 2, 3].map(n => <button key={n} onClick={() => handleClick(n.toString())}>{n}</button>)}
        <button onClick={() => handleClick('+')}>+</button>

        {[4, 5, 6].map(n => <button key={n} onClick={() => handleClick(n.toString())}>{n}</button>)}
        {[7, 8, 9].map(n => <button key={n} onClick={() => handleClick(n.toString())}>{n}</button>)}

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleEqual} className="equal">=</button>
      </div>
    </div>
  );
};

export default App;
