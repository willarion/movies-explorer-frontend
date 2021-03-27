import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm'

function SavedMovies (props) {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVjZGY4Mjk3NmMzNTNkMjhjYTQ3OWIiLCJpYXQiOjE2MTY2OTkzMDYsImV4cCI6MTYxNzMwNDEwNn0.mJFt9Qfa9i-5k7eVXxD8By4_l5Wi6AKA2W7OB5ETddg';

  return (
    <main>
      <SearchForm 
        onShorts={props.onShorts}
      />
      <MoviesCardList 
        deleteBtn={true}
        filteredMovies={props.savedCards} 
        savedCards={props.savedCards} 
        getMovies={props.getMovies}
      />
    </main>
  )
}

export default SavedMovies;