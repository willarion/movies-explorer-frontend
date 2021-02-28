import React from 'react';
import { Link } from 'react-router-dom';

function Navigation (props) {

  const [visible, setVisibility] = React.useState(false);

  function toggleClass() {
    const currentVisibility = visible;
    setVisibility(!currentVisibility);
  }

  return (
    <>
      <div className="navigation__burger" onClick={toggleClass}>
        <label for="burger" className={visible ? `navigation__burger-main-line navigation__burger-main-line_checked` : `navigation__burger-main-line`} />
      </div>
      <nav className={visible ? `navigation navigation_visible` : `navigation`}>
        <Link 
          // to={props.urlAdress} 
          className="navigation__account navigation__link">
          {/* {props.account} */} Аккаунт
          <div className="navigation__account-icon" />
        </Link>

        <ul className="navigation__links">
          <li className="navigation__link-item">
            <Link 
            // to={props.urlAdress} 
            className="navigation__link">
              {/* {props.links[0]} */} Главная
            </Link> 
          </li>
          <li className="navigation__link-item">
            <Link 
            // to={props.urlAdress} 
            className="navigation__link">
              {/* {props.links[0]} */} Фильмы
            </Link>
          </li>
          <li className="navigation__link-item">
            <Link 
            // to={props.urlAdress} 
            className="navigation__link">
              {/* {props.links[0]} */} Сохраненные Фильмы
            </Link>
          </li>
        </ul>
        {/* <button className="navigation__button navigation__link">Войти</button> */}
      </nav>
    </>
  )
}

export default Navigation; 



