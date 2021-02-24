import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm'

function Movies (props) {

  return (
    <main>
      <SearchForm />
      <MoviesCardList />
    </main>
  )
}

export default Movies;