import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import {movieApiSettings} from '../../utils/constants';


function MoviesCard (props) {
  //temporary token
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVjZGY4Mjk3NmMzNTNkMjhjYTQ3OWIiLCJpYXQiOjE2MTY2OTkzMDYsImV4cCI6MTYxNzMwNDEwNn0.mJFt9Qfa9i-5k7eVXxD8By4_l5Wi6AKA2W7OB5ETddg';

  const currentUser = React.useContext(CurrentUserContext);
  const [likeStatus, setLikeStatus] = React.useState(false);

  const likeBtn = props.likeBtn ? 'movies-card__btn_state_like' : '';
  const deleteBtn = props.deleteBtn ? 'movies-card__btn_state_delete' : '';

  function calculateDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    const durationStatement = `${hours} ч ${minutes} м`;

    return durationStatement;
  }

  // const isLiked = props.card.owner === currentUser._id;
  // сделать гет кардс (user's cards) и оттуда передавать props.card.owner, чтобы выяснить isOwned? 
  
  // temporary
  // const isLiked = true;
  const isLiked = false; 
  const movieId = 1; 


  function handleBtnClick(e) {
    e.stopPropagation();
        const card = {
          country: props.card.country,
          director: props.card.director,
          duration: props.card.duration,
          year: props.card.year,
          description: props.card.description,
          image: movieApiSettings.baseUrl + props.card.image.url,
          trailer: props.card.trailerLink,
          thumbnail: movieApiSettings.baseUrl + props.card.image.formats.thumbnail.url,
          movieId: props.card.id, // id from original db
          nameRU: props.card.nameRU, 
          nameEN: props.card.nameEN, 
        }

        const info = (obj) => {
          let o = {};
          for (var key in obj) {
            o[key] = obj[key]  ? obj[key] : 'не указано';
          }
          console.log(o);
          return o;
        }

        const cardInfo = info(card);

    if (likeBtn) {
      if (!isLiked) { // если не лайкнуто
        setLikeStatus(true);
        mainApi.changeLikeCardStatus({token, isLiked, cardInfo}) // isLiked - true
        console.log('лайкнуть')
      } else {
        setLikeStatus(false);
        mainApi.changeLikeCardStatus({token, movieId, isLiked}) // isLiked - false
        console.log('убрать лайк')
      }
    }
  }
 


  return (
    <div className="movies-card" onClick={() => window.open(props.card.trailerLink)}>
      <div className="movies-card__text">
        <p className="movies-card__name">{props.card.nameRU}</p>
        <p className="movies-card__duration">{calculateDuration(props.card.duration)}</p>
        <button 
          type="button" 
          className={`
            movies-card__btn 
            ${likeBtn} 
            ${likeStatus ? 'movies-card__btn_state_is-liked' : ''}
            ${deleteBtn}
          `} 
          onClick={handleBtnClick}
        />
      </div>
      <img alt="иллюстрация" src={props.card.image !== null ? movieApiSettings.baseUrl + props.card.image.url : '#'} className="movies-card__image" />
    </div>
  )
}

export default MoviesCard;