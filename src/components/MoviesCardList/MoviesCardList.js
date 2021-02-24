import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'

function MoviesCardList (props) {

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
    <section className="movies-card-list">
      {/* <Preloader /> */}
      <p className="movies-card-list__failed-search">
        К сожалению, ничего не нашлось...
      </p>
      <ul className="movies-card-list__list">
        {// props.
        cards.map((card) => (
          <MoviesCard card={card} key={card._id} />
        ))}
      </ul>
      <button className="movies-card-list__btn" type="button">Ещё</button>
    </section>
  )
}

export default MoviesCardList;