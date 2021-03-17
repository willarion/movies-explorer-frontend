import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation (props) {

  const loggedIn = true;

  const linksColor = props.headerLight ? 'navigation__link navigation__link_black' : 'navigation__link';

  return (
    <>
      <div className={loggedIn ? "navigation__burger navigation__burger_visible" : "navigation__burger"} onClick={props.toggleClass}>
        <label for="burger" 
        className={props.visibleNavigation ? "navigation__burger-main-line navigation__burger-main-line_checked" : "navigation__burger-main-line"} 
        />
      </div>
      <nav className={ loggedIn ? (props.visibleNavigation ? "navigation_sided navigation_visible navigation" : "navigation_sided navigation") : "navigation" }>
        <NavLink 
          to="/profile" 
          className={ loggedIn ? "navigation__account navigation__link navigation__link-item_sided" : "navigation__link_invisible"}>
          {/* {props.account} */} Аккаунт
          <div className="navigation__account-icon" />
        </NavLink>
        <button className={loggedIn ?  "navigation__link_invisible" : "navigation__button navigation__link"}>Войти</button>
        <ul className={loggedIn ? "navigation__links navigation__links_sided" : "navigation__links"}>
          <li className={loggedIn ? "navigation__link-item navigation__link-item_sided" :  "navigation__link-item"}>
            <NavLink 
              exact to="/"
              activeClassName={props.headerLight ? 'navigation__link_current navigation__link_current_black' : 'navigation__link_current'}
              className={loggedIn ? "navigation__link navigation__link_sided" : "navigation__link_invisible"}
            >
              Главная
            </NavLink> 
          </li>
          <li className={loggedIn ? "navigation__link-item navigation__link-item_sided" :  "navigation__link-item"}>
            <NavLink 
              to="/movies"
              activeClassName={props.headerLight ? 'navigation__link_current navigation__link_current_black' : 'navigation__link_current'}
              className={loggedIn ? (props.visibleNavigation ? linksColor + " navigation__link_sided" : `${linksColor}` ) : "navigation__link_invisible"}
            >
              Фильмы
            </NavLink>
          </li>
          <li className={loggedIn ? "navigation__link-item navigation__link-item_sided" :  "navigation__link-item"}>
            <NavLink 
              to="/saved-movies"
              activeClassName={props.headerLight ? 'navigation__link_current navigation__link_current_black' : 'navigation__link_current'}
              className={loggedIn ? (props.visibleNavigation ? linksColor + " navigation__link_sided" : `${linksColor}` ) : "navigation__link_invisible"}
            >
              Сохраненные Фильмы
            </NavLink>
          </li>
          <li className={loggedIn ? "navigation__link-item navigation__link-item_sided" :  "navigation__link-item"}>
            <NavLink 
              to="/signup"
              className={loggedIn ? "navigation__link_invisible" : "navigation__link"}>
              Регистрация
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation; 



