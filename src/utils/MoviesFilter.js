function movieMatches(movie, searchInput) {
  const keyWord = searchInput.toLowerCase();
  const movieData = Object.values(movie);
  
  return movieData.some((value) => {
    return String(value).toLocaleLowerCase().includes(keyWord);
  });
}

function filterMovies(shorts, moviesArray, searchInput) {
  let newMoviesArray;
  if (shorts) {
    newMoviesArray = moviesArray.filter((movie) => {
      return movieMatches(movie, searchInput) && movie.duration < 41;
    });
  } else {
    newMoviesArray = moviesArray.filter((movie) => {
      return movieMatches(movie, searchInput);
    });
  }
  return newMoviesArray;
}

export { filterMovies };