import React from 'react';
import {openInNewTab} from '../../utils/safelyNewTabOpener';

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
      <p className="footer__info">Learning project Yandex.Praktikum х BeatFilm</p>
      <div className="footer__navigation">
        <p className="footer__copyright">&#169; 2020</p>
        <nav className="footer__navigation-links">
          <a onClick={() => openInNewTab("https://praktikum.yandex.ru")} className="footer__navigation-link footer__link">Yandex.Praktikum</a> 
          <a onClick={() => openInNewTab("https://github.com/willarion")} className="footer__navigation-link footer__link">Github</a> 
          <a onClick={() => openInNewTab("https://www.linkedin.com/in/willarion/")}className="footer__navigation-link footer__link">Linkedin</a> 
        </nav>
      </div>
    </footer>
  )
}

export default Footer;