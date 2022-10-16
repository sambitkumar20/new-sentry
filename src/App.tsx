import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const breakTheCode = () => {
    throw new Error("Broken code with @sentry/Browse")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={breakTheCode}>Brake the Code</button>
        <button onClick={breakTheCode}>Brake the Code 2</button>
        
      </header>
    </div>
  );
}

export default App;
