import React from 'react'
import arrow from './arrow.svg'

function Home(){

     return(
          <div className="home-container" id="home">
               <div className="landing-container">
                    <div className="landing-title-container">
                         <p className="title">👋🏻 Welcome, IGN.</p>
                    </div>
                    <div className="landing-subtitle-container">
                         <p className="subtitle">My name is <span className="title-emphasis">Kevin Nguyen</span> and I'd like to be your next <span className="title-emphasis">IGN product manager intern</span>. <br />I hope we can work together someday.</p>
                    </div>
                    <div className="call-to-action">
                         <a href="#introduction" alt="introlink"><img src={arrow} alt="proceed arrow" className="landing-button"/></a>
                    </div>
               </div>
          </div>
     )
}

export default Home