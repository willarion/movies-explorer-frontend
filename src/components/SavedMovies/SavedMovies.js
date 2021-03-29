import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm'

function SavedMovies (props) {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVjZGY4Mjk3NmMzNTNkMjhjYTQ3OWIiLCJpYXQiOjE2MTY2OTkzMDYsImV4cCI6MTYxNzMwNDEwNn0.mJFt9Qfa9i-5k7eVXxD8By4_l5Wi6AKA2W7OB5ETddg';

  const movies = props.searchHappened ? props.filteredMovies : props.savedCards;
  
  const error = false;

  console.log(props.onNothingFound);

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