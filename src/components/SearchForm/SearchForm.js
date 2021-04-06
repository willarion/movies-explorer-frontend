import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


function SearchForm(props) {

  const [errorMessage, setErrorMessage] = React.useState('');

  function handleMovieChange(e) {
    const value = e.target.value;

    if (value === undefined || value.trim() === '') {
      setErrorMessage('Нужно ввести ключевое слово');
      props.setMovieInput('');

    } else {
        setErrorMessage('');
        props.setMovieInput(value);
      }
    }  

  function handleSubmit(e) {
    e.preventDefault();
    if (props.movieInput) {
      props.onMovieSearch();
    } else {
      console.log('нечего искать');
      return;
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <div className="search-form__input-container">
        <div className="search-form__illustration" />
        <input className="search-form__input" placeholder="Фильм" value={props.movieInput} onChange={handleMovieChange} required />
        <button className="search-form__btn" type="submit" />
      </div>
      <p className="search-form__error">{errorMessage}</p>
      <FilterCheckbox 
        onShorts={props.onShorts}
      />
    </form>
  )
}

export default SearchForm;