import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {
  // внешний вид и видимость header и footer в зависимости от страницы
  const [location, setLocation] = React.useState(window.location.pathname);

  const loc = useLocation();

  React.useEffect(() => {
    setLocation(loc.pathname);
  }, [loc]);

  const [footerVisibility, setFooterVisibility] = React.useState('');
  const [headerVisibility, setHeaderVisibility] = React.useState('');
  const [headerColor, setHeaderColor] = React.useState(''); // white

  React.useEffect(() => {
    if (location === '/') {
      setHeaderColor('header_dark');
    } 
    return;
  }, [location]);

  React.useEffect(() => {
    if (location === '/profile') {
      setFooterVisibility('footer_invisible');
    }
    if (location === '/register' || location === '/login' || (location !== '/' && location !== '/movies' && location !== '/saved-movies' && location !== '/profile')) {
      setHeaderVisibility('header_invisible');
      setFooterVisibility('footer_invisible');
    } 
    return;
  }, [location]);


  // видимость навигации
  const [visibleNavigation, setNavigationVisibility] = React.useState(false);

  function toggleClass() {
    const currentVisibility = visibleNavigation;
    setNavigationVisibility(!currentVisibility);
  }

  return (
    <>
      <Header 
        toggleClass={toggleClass} 
        visibleNavigation={visibleNavigation}
        headerVisibility={headerVisibility}
        headerColor={headerColor}
      />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies class={'movies-card__btn_state_delete'} />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      <Footer 
        footerVisibility={footerVisibility}
      />
    </>
  );
}

export default App;
