import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'

function MoviesCardList (props) {

  return (
    <section className="movies-card-list">
      {/* <Preloader /> */}
      <p className="movies-card-list__failed-search">
        К сожалению, ничего не нашлось...
      </p>
      <ul className="movies-card-list__list">
        {props.cards.map((card) => (
          <MoviesCard card={card} key={card._id} />
        ))}
      </ul>
      <button className={`movies-card-list__btn ${ props.disabledBtn }`} type="button">Ещё</button>
    </section>
  )
}

export default MoviesCardList;