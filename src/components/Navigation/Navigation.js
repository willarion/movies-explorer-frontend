import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation (props) {
  const loggedIn = props.loggedIn;

  const linksColor = props.headerLight ? 'navigation__link navigation__link_black' : 'navigation__link';
  const headerLight = props.headerLight;

  const [visibleNavigation, setNavigationVisibility] = React.useState(false);

  function toggleClass() {
    const currentVisibility = visibleNavigation;
    setNavigationVisibility(!currentVisibility);
  }

  const popupToClose = React.useRef();

  const handleClick = e => {
    if (popupToClose.current.contains(e.target)) {
      return;
    }
    setNavigationVisibility(false);
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);


  return (
    <div ref={popupToClose}> 
      <div className={loggedIn ? "navigation__burger navigation__burger_visible" : "navigation__burger"} onClick={toggleClass}>
        <label htmlFor="burger" 
        className={visibleNavigation ? "navigation__burger-main-line navigation__burger-main-line_checked" : "navigation__burger-main-line"} 
        />
      </div>
      <nav className={ loggedIn ? (visibleNavigation ? "navigation_sided navigation_visible navigation" : "navigation_sided navigation") : "navigation" }>
        <NavLink 
          to="/profile" 
          className={ loggedIn ? "navigation__account navigation__link navigation__link-item_sided" : "navigation__link_invisible"}
        >
          Account
          <div className="navigation__account-icon" />
        </NavLink>
        <NavLink to="/signin">
          <button className={loggedIn ?  "navigation__link_invisible" : "navigation__button navigation__link"}>Войти</button>
        </NavLink>
        <ul className={loggedIn ? "navigation__links navigation__links_sided" : "navigation__links"}>
          <li className={loggedIn ? "navigation__link-item navigation__link-item_sided" :  "navigation__link-item"}>
            <NavLink 
              exact to="/"
              activeClassName={headerLight ? 'navigation__link_current navigation__link_current_black' : 'navigation__link_current'}
              className={loggedIn ? "navigation__link navigation__link_sided" : "navigation__link_invisible"}
            >
              Main
            </NavLink> 
          </li>
          <li className={loggedIn ? "navigation__link-item navigation__link-item_sided" :  "navigation__link-item"}>
            <NavLink 
              to="/movies"
              activeClassName={headerLight ? 'navigation__link_current navigation__link_current_black' : 'navigation__link_current'}
              className={loggedIn ? (visibleNavigation ? linksColor + " navigation__link_sided" : `${linksColor}` ) : "navigation__link_invisible"}
            >
              Movies
            </NavLink>
          </li>
          <li className={loggedIn ? "navigation__link-item navigation__link-item_sided" :  "navigation__link-item"}>
            <NavLink 
              to="/saved-movies"
              activeClassName={headerLight ? 'navigation__link_current navigation__link_current_black' : 'navigation__link_current'}
              className={loggedIn ? (visibleNavigation ? linksColor + " navigation__link_sided" : `${linksColor}` ) : "navigation__link_invisible"}
            >
              Saved-movies
            </NavLink>
          </li>
          <li className={loggedIn ? "navigation__link-item navigation__link-item_sided" :  "navigation__link-item"}>
            <NavLink 
              to="/signup"
              className={loggedIn ? "navigation__link_invisible" : "navigation__link"}>
              Sign up
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation; 



