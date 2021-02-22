import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm</p>
      <div className="footer__navigation">
        <p className="footer__copyright">&#169; 2020</p>
        <nav className="footer__navigation-links">
          <Link to="#" className="footer__navigation-link footer__link">Яндекс.Практикум</Link> 
          <Link to="#" className="footer__navigation-link footer__link">Github</Link> 
          <Link to="#" className="footer__navigation-link footer__link">Linkedin</Link> 
        </nav>
      </div>
    </footer>
  )
}

export default Footer;