import React from 'react';

function AboutProject(props) {

  return (
    <section className="about-project">
      <h2 className="about-project__heading">О проекте</h2>
      <div className="about-project__container">
          <p className="about-project__stages-header about-project__header">The diploma project included 5 stages.</p>
          <p className="about-project__stages-info about-project__info">Drawing up a plan, working on the backend, html-coding, adding functionality and finalizing.</p>
  
          <p className="about-project__timing-header about-project__header">It took 5 weeks to complete the diploma.</p>
          <p div className="about-project__timing-info about-project__info">Each stage had a soft and hard deadline that had to be met to defend successfully.</p>
        </div>
          <div className="about-project__timeline-container"> 
            <div className="about-project__timeline-back">
              <p className="about-project__timeline-text about-project__timeline-heading">1 week</p>
              <p className="about-project__timeline-text about-project__timeline-subheading">Back-end</p>
            </div>
            <div className="about-project__timeline-front">
              <p className="about-project__timeline-text about-project__timeline-heading">4 weeks</p>
              <p className="about-project__timeline-text about-project__timeline-subheading">Front-end</p>
            </div>
          </div>
      
    </section>
  )
}

export default AboutProject;