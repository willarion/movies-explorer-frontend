import React from 'react';
import headerLogo from '../../images/logo-header.svg';
import Navigation from '../Navigation/Navigation';

function Header (props) {
  return (
    <header className="header">
      <div style={{ backgroundImage: `url(${headerLogo})` }} className="header__logo" />
     <Navigation toggleClass={props.toggleClass} visible={props.visible} />
    </header>
  )
}

export default Header; 