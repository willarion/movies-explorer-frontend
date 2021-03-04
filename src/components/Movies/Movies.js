import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm'

function Movies (props) {

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
    {
      _id: 11,
      name: 'sfdf',
      duration: 111,
      image: 'https://poster.nicefon.ru/2018_03/13/1080x610/2086154521359db595d245.jpg',
    },
    {
      _id: 13,
      name: 'sfdf',
      duration: 111,
      image: 'https://poster.nicefon.ru/2018_03/13/1080x610/2086154521359db595d245.jpg',
    },
    {
      _id: 31,
      name: 'sfdf',
      duration: 111,
      image: 'https://poster.nicefon.ru/2018_03/13/1080x610/2086154521359db595d245.jpg',
    },
    {
      _id: 15,
      name: 'sfdf',
      duration: 111,
      image: 'https://poster.nicefon.ru/2018_03/13/1080x610/2086154521359db595d245.jpg',
    },
  ]

  return (
    <main>
      <SearchForm />
      <MoviesCardList cards={cards} />
    </main>
  )
}

export default Movies;