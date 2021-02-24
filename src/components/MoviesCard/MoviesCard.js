import React from 'react';

function MoviesCard (props) {

  return (
    <div className="movies-card">
      <div className="movies-card__text">
        <p className="movies-card__name">Film</p>
        <p className="movies-card__duration">1111</p>
        <button type="button" className="movies-card__btn" />
      </div>
      <img alt="иллюстрация" src={props.card.image} className="movies-card__image" />
    </div>
  )
}

export default MoviesCard;