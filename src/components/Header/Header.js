import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo-header.svg';

function Header (props) {
  return (
    <header className="header">
      <div style={{ backgroundImage: `url(${headerLogo})` }} className="header__logo" />
      <nav className="header__navigation">
        <div className="header__navigation-links">
          <Link 
          // to={props.urlAdress} 
          className="header__link header__navigation-link">
            {/* {props.links[0]} */} Фильмы
          </Link>
          <Link 
          // to={props.urlAdress} 
          className="header__link header__navigation-link">
            {/* {props.links[0]} */} Сохраненные Фильмы
          </Link>
          <button className="header__link header__button">Войти</button>
        </div>
        <Link 
          // to={props.urlAdress} 
          className="header__link header__navigation-account">
          {/* {props.account} */} Аккаунт
          <div className="header__navigation-account-icon" />
        </Link>
      </nav>
    </header>
  )
}

export default Header; 