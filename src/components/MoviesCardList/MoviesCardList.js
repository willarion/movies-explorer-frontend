import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList (props) {

  const [width, setWidth] = React.useState(window.innerWidth);
  const [likeBtn, setLikeBtn] = React.useState(false);
  const [deleteBtn, setDeleteBtn] = React.useState(false);
  const [moreBtn, setMoreBtn] = React.useState(false);
  const [amountToRender, setAmountToRender] = React.useState(0);
  const showMoreCounter = {
    desktop: 3,
    mobile: 2,
  }
  const moviesToRender = props.filteredMovies !== null ? props.filteredMovies : [];

  React.useEffect(() => {
    if (props.likeBtn) {
      setLikeBtn(true);
      setDeleteBtn(false);
    } else if (props.deleteBtn) {
      setDeleteBtn(true);
      setLikeBtn(false);
    }
  }, [props.likeBtn, props.deleteBtn]);

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
    if (moviesToRender.length >= 3 && (moviesToRender.length > amountToRender && amountToRender !== 0)) {
      setMoreBtn(true);
    } else {
      setMoreBtn(false);
    }
  }, [moviesToRender, amountToRender]);

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

  return (
    <section className="movies-card-list">
      { props.onLoading && <Preloader /> }
      <p className="movies-card-list__failed-search">
        { props.onError ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' : (props.onNothingFound ? 'К сожалению, ничего не нашлось...' : '')}
      </p>
      <ul className="movies-card-list__list">
        {(moviesToRender !== null || moviesToRender !== undefined ) && moviesToRender.slice(0, amountToRender).map((card) => (
          <MoviesCard 
            likeBtn={likeBtn} 
            deleteBtn={deleteBtn}
            card={card} 
            key={card.id || card._id} 
            getMovies={props.getMovies}
            savedCards={props.savedCards}
          />
        ))}
      </ul>
     { moreBtn && <button className="movies-card-list__btn" type="button" onClick={showMoreMovies} >Ещё</button> }
    </section>
  )
}

export default MoviesCardList;