import React from 'react';
import headerLogo from '../../images/logo-header.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header (props) {
  
  return (
    <header className={ props.headerVisibility ? ( props.headerLight ? 'header' : 'header header_dark') : 'header_invisible' }>
      <Link to="/" style={{ backgroundImage: `url(${headerLogo})` }} className="header__logo" />
      <Navigation toggleClass={props.toggleClass} visibleNavigation={props.visibleNavigation} linkUnderlined={props.linkUnderlined} />
    </header>
  )
}

export default Header; 