import React from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import moviesApi from '../../utils/MoviesApi'
import mainApi from '../../utils/MainApi';
import { filterMovies } from '../../utils/MoviesFilter';

function App() {

  const history = useHistory();

  const [loggedIn, setLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [registerResultMessage, setRegisterResultMessage] = React.useState('');
  const [loginResultMessage, setLoginResultMessage] = React.useState('');
  const [profileUpdateResultMessage, setProfileUpdateResultMessage] = React.useState('');

  function signUp(password, email, name, resetForm) {
    return mainApi.register(password, email, name)
    .then((res) => {
      if (res) {
        setRegisterResultMessage('');
        resetForm();
        history.push('/signin');
      } else {
        setRegisterResultMessage('Что-то пошло не так! Попробуйте ещё раз!');
      }
    })
    .catch((e) => {
      console.log(e);
      setRegisterResultMessage('Что-то пошло не так! Попробуйте ещё раз!');
    });
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  function signIn(password, email, resetForm) {
    return mainApi.login(password, email)
    .then((data) => {
      if (!data) {
        setLoginResultMessage('Что-то пошло не так! Попробуйте ещё раз!');
        return;
      } 
      if (data.token) {

        mainApi.getUserInfo(data.token)
          .then((userInfoObject) => {
            setCurrentUser(userInfoObject);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });

        handleLogin();
        resetForm();
        history.push('/');
        
        return;
      }
    })
    .catch((e) => console.log(e));
  }

  React.useEffect(() => { //tokenCheck
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      mainApi.getUserInfo(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            handleLogin();
          }
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    } 
  }, [history])

  function signOut() {
      localStorage.removeItem('jwt');
      history.push('/signin');
  }

  function updateProfile(userInfoObj) {
    const jwt = localStorage.getItem('jwt');
    
        mainApi.updateUserInfo(userInfoObj, jwt)
        .then((res) => {
          if (res) {
            setProfileUpdateResultMessage('');
            setCurrentUser(res);
          } else {
            setProfileUpdateResultMessage('Что-то пошло не так! Попробуйте ещё раз!');
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }

  const [location, setLocation] = React.useState(window.location.pathname);

  const loc = useLocation();

  React.useEffect(() => {
    setLocation(loc.pathname);
  }, [loc]);


  // внешний вид и видимость header и footer в зависимости от страницы
  const [footerVisibility, setFooterVisibility] = React.useState(true);
  const [headerVisibility, setHeaderVisibility] = React.useState(true);
  const [headerLight, setHeaderLight] = React.useState(true); 

  React.useEffect(() => {
    if (location === '/') {
      setHeaderLight(false);
    } else {
      setHeaderLight(true);
    }
  }, [location]); 

  React.useEffect(() => {
    if (location === '/profile') {
      setFooterVisibility(false);
    } else
    if (location === '/register' || location === '/login' || (location !== '/' && location !== '/movies' && location !== '/saved-movies' && location !== '/profile')) {
      setHeaderVisibility(false);
      setFooterVisibility(false);
    } else {
      setHeaderVisibility(true);
      setFooterVisibility(true);
    }
  }, [location]);

  // видимость навигации
  const [visibleNavigation, setNavigationVisibility] = React.useState(false);

  function toggleClass() {
    const currentVisibility = visibleNavigation;
    setNavigationVisibility(!currentVisibility);
  }


  // поиск фильмов (по внешнему АПИ)
  const [movieInput, setMovieInput] = React.useState('');
  const [shorts, setShorts] = React.useState(false);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  const [nothingFoundMessage, setNothingFoundMessage] = React.useState(false);
  const [errorHappenedMessage, setErrorHappenedMessage] = React.useState(false);
  const [searchHappened, setSearchHappened] = React.useState(false);

  function renderLoading(isLoading) {  
    if (isLoading) {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }

  function alertNothingFound(moviesArray) {
    if (moviesArray.length === 0) {
      setNothingFoundMessage(true);
    } else {
      setNothingFoundMessage(false);
    }
  }

  function getSearchedMovies() {
    moviesApi.getMovieList()
    .then((res) => {
      const newMoviesArray = filterMovies(shorts, res, movieInput);
      setFilteredMovies(newMoviesArray);
      alertNothingFound(newMoviesArray);
    })
    .catch((err) => {
      setErrorHappenedMessage(true);
      console.log(err);
    })
    .finally(() => renderLoading(false));
  }

  function handleMovieSearch() {
    renderLoading(true);
    setSearchHappened(true);
    getSearchedMovies();
  }

  React.useEffect(() => {
    if (filteredMovies.length > 0) {
      localStorage.setItem('movies', JSON.stringify(filteredMovies));
    }
  }, [filteredMovies]);

  const [savedCards, setSavedCards] = React.useState([]);
  const [filteredSavedCards, setFilteredSavedCards] = React.useState([]);

  function getSavedMovies() { // сохраненные фильмы 
    const jwt = localStorage.getItem('jwt');

    mainApi.getMovies(jwt)
      .then((res) => {
        setSavedCards(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  React.useEffect(() => { // обновление сохраненных фильмов
    const jwt = localStorage.getItem('jwt');
    
    getSavedMovies(jwt);
  }, []); 

  function getSearchedSavedMovies() {
      setSearchHappened(true);
      const newMoviesArray = filterMovies(shorts, savedCards, movieInput);
      setFilteredSavedCards(newMoviesArray);
      alertNothingFound(newMoviesArray);
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header 
          toggleClass={toggleClass} 
          visibleNavigation={visibleNavigation}
          headerVisibility={headerVisibility}
          headerLight={headerLight}
        />
          <Switch>
            <ProtectedRoute exact path="/" loggedIn={loggedIn} component={Main} />
            <ProtectedRoute path="/movies" loggedIn={loggedIn} component={Movies} 
                onMovieSearch={handleMovieSearch}
                movieInput={movieInput}
                setMovieInput={setMovieInput}
                onShorts={setShorts}
                onLoading={loader}
                onNothingFound={nothingFoundMessage}
                onError={errorHappenedMessage}
                searchHappened={searchHappened}
                filteredMovies={filteredMovies}
                getMovies={getSavedMovies}
                savedCards={savedCards}
              />
            <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} component={SavedMovies} 
              onShorts={setShorts}
              getMovies={getSavedMovies}
              savedCards={savedCards}
              filteredMovies={filteredSavedCards}
              onSavedMovieSearch={getSearchedSavedMovies}
              setMovieInput={setMovieInput}
              movieInput={movieInput}
              searchHappened={searchHappened}
              onNothingFound={nothingFoundMessage}
            />
            <ProtectedRoute path="/profile" loggedIn={loggedIn} component={Profile}
              onProfileUpdate={updateProfile}
              onSignOut={signOut}
              message={profileUpdateResultMessage}
            />
            <Route path="/signup">
              <Register 
                onSignUp={signUp}
                message={registerResultMessage}
              />
            </Route>
            <Route path="/signin">
              <Login
                onSignIn={signIn}
                message={loginResultMessage}
              />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        <Footer 
          footerVisibility={footerVisibility}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
