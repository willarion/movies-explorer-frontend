import React from 'react';
import { Link } from 'react-router-dom';

function Navigation (props) {

  const loggedIn = true;

  const [linkStyleMobile, setLinkStyleMobile] = React.useState("navigation__link");
  const [linksGroupStyleMobile, setLinksGroupStyleMobile] = React.useState("navigation__links");

  React.useEffect(() => {
    if(loggedIn) {
      setLinkStyleMobile("navigation__link_sided");
      setLinksGroupStyleMobile("navigation__links_sided");
    } else {
      setLinkStyleMobile("navigation__link");
      setLinksGroupStyleMobile("navigation__links");
    }
  }, [loggedIn]);

  return (
    <>
      <div className={loggedIn ? "navigation__burger navigation__burger_visible" : "navigation__burger"} onClick={props.toggleClass}>
        <label for="burger" 
        className={props.visibleNavigation ? "navigation__burger-main-line navigation__burger-main-line_checked" : "navigation__burger-main-line"} 
        />
      </div>
      <nav className={ loggedIn ? (props.visibleNavigation ? "navigation_sided navigation_visible navigation" : "navigation_sided navigation") : "navigation" }>
        <Link 
          to="/profile" 
          className={ loggedIn ? "navigation__account navigation__link navigation__link-item_sided" : "navigation__link_invisible"}>
          {/* {props.account} */} Аккаунт
          <div className="navigation__account-icon" />
        </Link>
        <button className={loggedIn ?  "navigation__link_invisible": "navigation__button navigation__link"}>Войти</button>
        <ul className={loggedIn ? "navigation__links navigation__links_sided" : "navigation__links"}>
          <li className={loggedIn ? "navigation__link-item navigation__link-item_sided" :  "navigation__link-item"}>
            <Link 
              to="/"
              className={loggedIn ? (props.visibleNavigation? "navigation__link navigation__link_sided" : "navigation__link") : "navigation__link_invisible"}>
              Главная
            </Link> 
          </li>
          <li className={loggedIn ? "navigation__link-item navigation__link-item_sided" :  "navigation__link-item"}>
            <Link 
              to="/movies"
              className={loggedIn ? (props.visibleNavigation? "navigation__link navigation__link_sided navigation__link_current" : "navigation__link") : "navigation__link_invisible"}>
              Фильмы
            </Link>
          </li>
          <li className={loggedIn ? "navigation__link-item navigation__link-item_sided" :  "navigation__link-item"}>
            <Link 
              to="/saved-movies"
              className={loggedIn ? (props.visibleNavigation? "navigation__link navigation__link_sided" : "navigation__link") : "navigation__link_invisible"}>
              Сохраненные Фильмы
            </Link>
          </li>
          <li className={loggedIn ? "navigation__link-item navigation__link-item_sided" :  "navigation__link-item"}>
            <Link 
              to="/signup"
              className={loggedIn ? "navigation__link_invisible" : "navigation__link"}>
              Регистрация
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation; 



