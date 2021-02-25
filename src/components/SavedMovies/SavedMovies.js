import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm'

function SavedMovies (props) {
  const disabledBtn = "movies-card-list__btn_disabled";

  const cards = [ // temporary data 
    {
      _id: 1,
      name: 'sfdf',
      duration: 111,
      image: 'https://poster.nicefon.ru/2018_03/13/1080x610/2086154521359db595d245.jpg',
    },
    {
      _id: 21,
      name: 'sfdf',
      duration: 111,
      image: 'https://poster.nicefon.ru/2018_03/13/1080x610/2086154521359db595d245.jpg',
    },
    {
      _id: 12,
      name: 'sfdf',
      duration: 111,
      image: 'https://poster.nicefon.ru/2018_03/13/1080x610/2086154521359db595d245.jpg',
    },
  ] 

  return (
    <main>
      <SearchForm />
      <MoviesCardList cards={cards} disabledBtn={disabledBtn} />
    </main>
  )
}

export default SavedMovies;