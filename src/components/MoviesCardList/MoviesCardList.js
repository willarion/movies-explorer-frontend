import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'

function MoviesCardList (props) {

  return (
    <section className="movies-card-list">
      { props.onLoading && <Preloader /> }
      <p className="movies-card-list__failed-search">
        { props.onError ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' : (props.onNothingFound ? 'К сожалению, ничего не нашлось...' : '')}
      </p>
      <ul className="movies-card-list__list">
        {props.cards.map((card) => (
          <MoviesCard deleteFilmBtn={props.deleteFilmBtn} card={card} key={card._id} />
        ))}
      </ul>
      <button className={`movies-card-list__btn ${ props.disabledBtn } `} type="button">Ещё</button>
    </section>
  )
}

export default MoviesCardList;