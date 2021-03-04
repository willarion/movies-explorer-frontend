import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  const [footerStyle, setfooterStyle] = React.useState('');

  React.useEffect(() => {
    if (!props.footerVisibility) {
      setfooterStyle('footer_invisible');
    }
    return;
  });

  return (
    <footer className={`footer ${footerStyle}`}>
      <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm</p>
      <div className="footer__navigation">
        <p className="footer__copyright">&#169; 2020</p>
        <nav className="footer__navigation-links">
          <Link to="https://praktikum.yandex.ru" className="footer__navigation-link footer__link">Яндекс.Практикум</Link> 
          <Link to="https://github.com/willarion" className="footer__navigation-link footer__link">Github</Link> 
          <Link to="https://www.linkedin.com/in/willarion/" className="footer__navigation-link footer__link">Linkedin</Link> 
        </nav>
      </div>
    </footer>
  )
}

export default Footer;