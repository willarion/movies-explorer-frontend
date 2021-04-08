import React from 'react';
import {openInNewTab} from '../../utils/safelyNewTabOpener';

function Portfolio(props) {

  return (
    <section className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>
      <ul className="portfolio__links-container">
        <li className="portfolio__link-item">
         <a className="portfolio__link" onClick={() => openInNewTab("https://github.com/willarion/how-to-learn")}>Static web page</a>
        </li>
        <li className="portfolio__link-item">
         <a className="portfolio__link" onClick={() => openInNewTab("https://github.com/willarion/russian-travel")}>Responsive website</a>
        </li>
        <li className="portfolio__link-item">
         <a className="portfolio__link" onClick={() => openInNewTab("https://github.com/willarion/react-mesto-api-full")} rel="noopener noreferrer">Single-page application</a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;