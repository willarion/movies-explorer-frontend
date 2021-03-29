import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import {movieApiSettings} from '../../utils/constants';


function MoviesCard (props) {
  //temporary token
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVjZGY4Mjk3NmMzNTNkMjhjYTQ3OWIiLCJpYXQiOjE2MTY2OTkzMDYsImV4cCI6MTYxNzMwNDEwNn0.mJFt9Qfa9i-5k7eVXxD8By4_l5Wi6AKA2W7OB5ETddg';

  const likeBtn = props.likeBtn ? 'movies-card__btn_state_like' : '';
  const deleteBtn = props.deleteBtn ? 'movies-card__btn_state_delete' : '';

  const currentUser = React.useContext(CurrentUserContext);
  const [src, setSrc] = React.useState('');
  const isLiked = props.savedCards.some((savedMovie) => savedMovie.description === props.card.description);
  const [likeStatus, setLikeStatus] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);

  function calculateDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    const durationStatement = `${hours} ч ${minutes} м`;

    return durationStatement;
  }

  React.useEffect(() => {
    if (likeBtn) {
      const src = props.card.image !== null ? movieApiSettings.baseUrl + props.card.image.url : '#';
      setSrc(src);
    } else 
    if (deleteBtn) {
      const src = props.card.image;
      setSrc(src);
    }
  }, []);

  function handleBtnClick(e) {
    e.stopPropagation();

    if (likeBtn) {
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
        let newObj = {};
        for (var key in obj) {
          newObj[key] = obj[key] ? obj[key] : 'не указано';
        }
        return newObj;
      }

      const cardInfo = info(card);


      if (isLiked || likeStatus) {

        // ОПРЕДЕЛИТЬ ID 
        const movieId = props.savedCards.find((savedMovie) => savedMovie.description === props.card.description)._id;
        console.log(movieId);

        mainApi.changeMovieLikeStatus({token, movieId, isLiked: true})
          .then(() => {
            setLikeStatus(false);
            setIsClicked(true);
            props.getMovies(token);
          })
          .catch((err) => console.log(err));
      } else { // если не лайкнуто
        mainApi.changeMovieLikeStatus({token, isLiked: false, cardInfo})
          .then(() => {
            setLikeStatus(true);
            setIsClicked(true);
            props.getMovies(token);
          })
          .catch((err) => console.log(err));
      }
    } else if (deleteBtn) {
      const movieId = props.card._id;
      mainApi.deleteMovie({token, movieId})
        .then(() => props.getMovies(token))
        .catch((err) => console.log(err));
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
            ${isClicked ? (likeStatus ? 'movies-card__btn_state_is-liked' : '') : (isLiked ? 'movies-card__btn_state_is-liked' : '')}
            ${deleteBtn}
          `} 
          onClick={handleBtnClick}
        />
      </div>
      <img alt="иллюстрация" src={src} className="movies-card__image" />
    </div>
  )
}

export default MoviesCard;