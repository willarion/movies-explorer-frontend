import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm'

function SavedMovies (props) {

  React.useEffect(() => { // обновление сохраненных фильмов
    props.getMovies();
    console.log('useeff');
  }, []); 

  const movies = props.searchHappened ? props.filteredMovies : props.savedCards;
  
  const error = false;

  return (
    <main>
      <SearchForm 
        onShorts={props.onShorts}
        onMovieSearch={props.onSavedMovieSearch}
        movieInput={props.movieInput}
        setMovieInput={props.setMovieInput}
      />
      <MoviesCardList 
        deleteBtn={true}
        filteredMovies={movies} 
        savedCards={props.savedCards} 
        getMovies={props.getMovies}
        onNothingFound={props.onNothingFound}
        onError={error}
      />
    </main>
  )
}

export default SavedMovies;