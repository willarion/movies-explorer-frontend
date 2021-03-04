import React from 'react';
import portrait from '../../images/me.jpg';
import { Link } from 'react-router-dom';

function Portfolio(props) {

  return (
    <section className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>
      <ul className="portfolio__links-container">
        <li className="portfolio__link-item">
         <Link className="portfolio__link">Статичный сайт</Link>
        </li>
        <li className="portfolio__link-item">
         <Link className="portfolio__link">Адаптивный сайт</Link>
        </li>
        <li className="portfolio__link-item">
         <Link className="portfolio__link">Одностраничное приложение</Link>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;