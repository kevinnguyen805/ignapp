import React from 'react';
import Intro from './components/Intro'
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="application-title-container">
        <p className="application-title">🥺 Kevin for IGN product manager intern 🥺 </p>
      </div>
      
      <div className="application-container">
        <Intro />

      </div>

      <div className="application-footer-container">
        <a> 📎 Resume</a>
        <a> 🔥 Portfolio</a>
      </div>
    </div>
  );
}

export default App;
