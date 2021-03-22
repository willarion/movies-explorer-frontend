import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList (props) {

  const [width, setWidth] = React.useState(window.innerWidth);
  const [moreBtn, setMoreBtn] = React.useState(false);
  const [amountToRender, setAmountToRender] = React.useState(0);
  const showMoreCounter = {
    desktop: 3,
    mobile: 2,
  }
  const moviesToRender = props.filteredMovies !== null ? props.filteredMovies : [];
  

  React.useEffect(() => {
    let timeout = null;

    function resizeListener() {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        console.log('произошел ресайз');
        setWidth(window.innerWidth)
      }, 150);
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  React.useEffect(() => {
    if (moviesToRender.length >= 3) {
      setMoreBtn(true);
    } else {
      setMoreBtn(false);
    }
  }, [moviesToRender]);

  React.useEffect(() => {
    if (moviesToRender.length > 0) {
      if (width > 768) {
        setAmountToRender(12);
      } else if (width > 480 && width <= 768) {
        setAmountToRender(8);
      } else if (width > 320 && width <= 480) {
        setAmountToRender(5);
      }
    }
  }, [width, moviesToRender]);

  function showMoreMovies() {
    if (moviesToRender.length > amountToRender) {
      if (width > 768) {
        setAmountToRender(amountToRender + showMoreCounter.desktop);
      } else if (width > 320 && width <= 768) {
        setAmountToRender(amountToRender + showMoreCounter.mobile);
      } 
    }
  }

  function calculateDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    const durationStatement = `{${hours} ч ${minutes} м}`;

    return durationStatement;
  }

  console.log(props.filteredMovies);
  console.log(amountToRender);
  console.log(moviesToRender.slice(0, amountToRender));

  return (
    <section className="movies-card-list">
      { props.onLoading && <Preloader /> }
      <p className="movies-card-list__failed-search">
        { props.onError ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' : (props.onNothingFound ? 'К сожалению, ничего не нашлось...' : '')}
      </p>
      <ul className="movies-card-list__list">
        {/* {props.cards.map((card) => (
          <MoviesCard likeBtn={true} card={card} key={card._id} />
        ))} */}
      </ul>
     { moreBtn && <button className="movies-card-list__btn" type="button" onClick={showMoreMovies} >Ещё</button> }
    </section>
  )
}

export default MoviesCardList;