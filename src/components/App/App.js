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
import moviesApi from '../../utils/MoviesApi'
 

function App() {

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


  // поиск фильмов
  const [movieInput, setMovieInput] = React.useState('');
  const [shorts, setShorts] = React.useState(false);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  const [nothingFoundMessage, setNothingFoundMessage] = React.useState(false);
  const [errorHappenedMessage, setErrorHappenedMessage] = React.useState(false);

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

  function movieMatches(movie, searchInput) {
    const keyWord = searchInput.toLowerCase();
    const keyMovieData = Object.values(movie).slice(1, 8);
    
    return keyMovieData.some((value) => {
      return String(value).toLocaleLowerCase().includes(keyWord);
    });
  }

  function filterMovies(moviesArray, searchInput) {
    let newMoviesArray;
    if (shorts) {
      newMoviesArray = moviesArray.filter((movie) => {
        return movieMatches(movie, searchInput) && movie.duration < 41;
      });
    } else {
      newMoviesArray = moviesArray.filter((movie) => {
        return movieMatches(movie, searchInput);
      });
    }
    setFilteredMovies(newMoviesArray);
    alertNothingFound(newMoviesArray);
  }

  function handleMovieSearch() {
    renderLoading(true)

    moviesApi.getMovieList()
      .then((res) => filterMovies(res, movieInput))
      .catch((err) => {
        setErrorHappenedMessage(true);
        console.log(err);
      })
      .finally(() => renderLoading(false));
  }

  React.useEffect(() => {
    if (filteredMovies.length > 0) {
      localStorage.setItem('movies', JSON.stringify(filteredMovies));
    }
  }, [filteredMovies]);


  console.log(filteredMovies);



  return (
    <>
      <Header 
        toggleClass={toggleClass} 
        visibleNavigation={visibleNavigation}
        headerVisibility={headerVisibility}
        headerLight={headerLight}
      />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies
              onMovieSearch={handleMovieSearch}
              movieInput={movieInput}
              setMovieInput={setMovieInput}
              onShorts={setShorts}
              onLoading={loader}
              onNothingFound={nothingFoundMessage}
              onError={errorHappenedMessage}
            />
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
