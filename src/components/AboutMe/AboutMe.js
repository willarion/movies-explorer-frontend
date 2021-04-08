import React from 'react';
import portrait from '../../images/me.jpg';
import {openInNewTab} from '../../utils/safelyNewTabOpener';

function AboutMe(props) {

  return (
    <section className="about-me">
      <h2 className="about-me__heading">Студентка</h2>
      <div className="about-me__container">
        <div className="about-me-text">
          <p className="about-me-text-heading">Marina Anisimova</p>
          <p className="about-me-text-subheading">junior front-end developer</p>
          <p className="about-me-text-bio">
            I'm originally from Minsk, Belarus. In 2019 I graduated from EHU in Vilnius, Lithuania, with a master's degree in international law. In 2020 I decided to change my career and entered courses of Yandex.Praktikum. And this website is my final project. 
          </p>
          <ul className="about-me__links">
            <li className="about-me__link-item">
              <a className="about-me__link" onClick={() => openInNewTab("https://www.linkedin.com/in/willarion/")}>Linkedin</a>
            </li>
            <li className="about-me__link-item">
              <a className="about-me__link" onClick={() => openInNewTab("https://github.com/willarion")}>Github</a>
            </li>
          </ul>
        </div>
        <img alt="portrait" src={portrait} className="about-me-portrait" />
      </div>
    </section>
  )
}

export default AboutMe;