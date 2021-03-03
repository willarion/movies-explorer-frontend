import React from 'react';
import headerLogo from '../../images/logo-header.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header (props) {

  const [headerStyle, setHeaderStyle] = React.useState('');

  React.useEffect(() => {
    if (props.headerColor) {
      setHeaderStyle(props.headerColor);
    }
    if (props.headerVisibility) {
      setHeaderStyle(props.headerVisibility);
    }
    return;
  });

  
  return (
    <header className={`header ${headerStyle}`}>
      <Link to="/" style={{ backgroundImage: `url(${headerLogo})` }} className="header__logo" />
      <Navigation toggleClass={props.toggleClass} visibleNavigation={props.visibleNavigation} />
    </header>
  )
}

export default Header; 