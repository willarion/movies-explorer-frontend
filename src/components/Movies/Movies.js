import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm'

function Movies (props) {

  const movies = props.searchHappened ? props.filteredMovies : JSON.parse(localStorage.getItem('movies'));


  return (
    <main>
      <SearchForm 
        onMovieSearch={props.onMovieSearch}
        movieInput={props.movieInput}
        setMovieInput={props.setMovieInput}
        onShorts={props.onShorts}
      />
      <MoviesCardList 
        onLoading={props.onLoading}
        onNothingFound={props.onNothingFound}
        onError={props.onError}
        filteredMovies={movies}
        likeBtn={true}
        getMovies={props.getMovies}
        savedCards={props.savedCards}
      />
    </main>
  )
}

export default Movies;