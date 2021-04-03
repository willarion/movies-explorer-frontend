import React from 'react';
import headerLogo from '../../images/logo-header.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header (props) {

  const headerClassColor = props.headerLight ? 'header' : 'header header_dark';
  const headerClasses =  props.headerVisibility ? headerClassColor : 'header_invisible';
  
  return (
    <header className={ headerClasses }>
      <Link to="/" style={{ backgroundImage: `url(${headerLogo})` }} className="header__logo" />
      <Navigation 
        toggleClass={props.toggleClass} 
        visibleNavigation={props.visibleNavigation} headerLight={props.headerLight} 
        loggedIn={props.loggedIn}
      />
    </header>
  )
}

export default Header; 