import React from 'react';
import portrait from '../../images/me.jpg';
import { Link } from 'react-router-dom';

function AboutMe(props) {

  return (
    <section className="about-me">
      <h2 className="about-me__heading">Студентка</h2>
      <div className="about-me__container">
        <div className="about-me-text">
          <p className="about-me-text-heading">Марина</p>
          <p className="about-me-text-subheading">Front-end developer</p>
          <p className="about-me-text-bio">Я из Минска, Беларусь. Закончила в 2019 Европейский гуманитарный университет и получила степерь магистра в международной праве. В 2020 году решила войти в IT и начала курсы от Яндекс.Практикума. Это мой дипломный проект.</p>
          <ul className="about-me__links">
            <li className="about-me__link-item">
              <Link className="about-me__link" to="https://www.linkedin.com/in/willarion/">Linkedin</Link>
            </li>
            <li className="about-me__link-item">
              <Link className="about-me__link" to="https://github.com/willarion">Github</Link>
            </li>
          </ul>
        </div>
        <img alt="портрет" src={portrait} className="about-me-portrait" />
      </div>
    </section>
  )
}

export default AboutMe;