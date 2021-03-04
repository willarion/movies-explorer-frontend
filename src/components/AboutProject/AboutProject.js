import React from 'react';

function AboutProject(props) {

  return (
    <section className="about-project">
      <h2 className="about-project__heading">О проекте</h2>
      <div className="about-project__container">
          <p className="about-project__stages-header about-project__header">Дипломный проект включал 5 этапов</p>
          <p className="about-project__stages-info about-project__info">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
  
          <p className="about-project__timing-header about-project__header">На выполнение диплома ушло 5 недель</p>
          <p div className="about-project__timing-info about-project__info">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
          <div className="about-project__timeline-container"> 
            <div className="about-project__timeline-back">
              <p className="about-project__timeline-text about-project__timeline-heading">1 неделя</p>
              <p className="about-project__timeline-text about-project__timeline-subheading">Back-end</p>
            </div>
            <div className="about-project__timeline-front">
              <p className="about-project__timeline-text about-project__timeline-heading">4 недели</p>
              <p className="about-project__timeline-text about-project__timeline-subheading">Front-end</p>
            </div>
          </div>
      
    </section>
  )
}

export default AboutProject;