import React from 'react';
import Intro from './components/Intro'
import './App.css';

function App() {
  return (
    <div>
      {/* <div className="application-title-container">
        <p className="application-title">🥺 Kevin for IGN product manager intern 🥺 </p>
      </div> */}
      <div className="app">
        <div className="application-footer-container">
          <a className="application-links"> 📎 Resume</a>
          <a className="application-links"> 🔥 Portfolio</a>
          <a className="application-links"> 📋 Document view</a>
        </div>
        <div className="application-title-container">
          <p className="application-title">🥺 Kevin for IGN product manager intern 🥺 </p>
        </div>
        
        <div className="application-container">
          <Intro />

        </div>

      </div>
    </div>
  );
}

export default App;
