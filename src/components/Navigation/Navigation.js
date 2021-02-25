import React from 'react';
import { Link } from 'react-router-dom';

function Navigation (props) {
  return (
    <nav className="navigation">
      <div className="navigation__links">
        <Link 
        // to={props.urlAdress} 
        className="navigation__link">
          {/* {props.links[0]} */} Фильмы
        </Link>
        <Link 
        // to={props.urlAdress} 
        className="navigation__link">
          {/* {props.links[0]} */} Сохраненные Фильмы
        </Link>
        <button className="navigation__button navigation__link">Войти</button>
      </div>
      <Link 
        // to={props.urlAdress} 
        className="navigation__account navigation__link">
        {/* {props.account} */} Аккаунт
        <div className="navigation__account-icon" />
      </Link>
    </nav>
  )
}

export default Navigation; 



