import React from 'react';
import Intro from './components/Intro'
import Questions from './components/Questions'
import './App.css';
import Home from './components/Home'

function App() {
  return (
    <div className="app-container">

      <div className="nav-bar">
        <nav>
          <div className='nav-link-container'>
            <a href="#home">Home</a>
            <a href="#introduction">Introduction</a>
            <a href="#why-pm">Why product management?</a>
            <a href="#web-product">Favorite web product</a>
            <a href="#user-testing">User testing</a>
            <a href="#product-expansion">Product expansion</a>
            <a href="#user-feedback">User feedback</a>
          </div>
        </nav>
      </div>
      
      <div className="app">


        {/* <div className="application-footer-container">
          <a className="application-links"> 📎 Resume</a>
          <a className="application-links"> 🔥 Portfolio</a>
          <a className="application-links"> 📋 Document view</a>
        </div>
        <div className="application-title-container">
          <p className="application-title">🥺 Kevin for IGN product manager intern 🥺 </p>
        </div> */}
        
        <div className="application-container">
          <Home />
          <Intro />
          {/* <Questions /> */}
        </div>

      </div>
      
    </div>
  );
}

export default App;
