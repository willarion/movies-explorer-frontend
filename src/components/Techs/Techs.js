import React from 'react';

function Techs(props) {

  return (
    <section className="techs">
      <h2 className="techs__heading">Технологии</h2>
      <div className="techs__text">
        <p className="techs__text-heading">7 технологий</p>
        <p className="techs__text-subheading">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <ul className="techs__list">
        <li className="techs__list-item">HTML</li>
        <li className="techs__list-item">CSS</li>
        <li className="techs__list-item">JS</li>
        <li className="techs__list-item">React</li>
        <li className="techs__list-item">Git</li>
        <li className="techs__list-item">Express.js</li>
        <li className="techs__list-item">mongoDB</li>
      </ul>
    </section>
  )
}

export default Techs;