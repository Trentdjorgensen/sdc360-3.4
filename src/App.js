import React, { useState } from 'react';
import './App.css';
//Trejor6927 SDC360 3.4 May 28th, 2026

function App() {

  const [message, setMessage] = useState('');
  const [displayedMessage, setDisplayedMessage] = useState('Hello World');

  const handleClick = () => {
    setDisplayedMessage(message);
  };

  return (
    <div className="container">
      <h1>Trejor6927 SDC360 3.4 May 28th, 2026</h1>
      <h1>Display Message App</h1>

      <label>Message to Display</label>
      <br />

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br /><br />

      <button onClick={handleClick}>
        Display Message
      </button>

      <h2>{displayedMessage}</h2>
    </div>
  );
}

export default App;
