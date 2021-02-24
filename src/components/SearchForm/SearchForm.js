import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

  return (
    <form className="search-form">
      <div className="search-form__input-container">
        <div className="search-form__illustration" />
        <input className="search-form__input" placeholder="Фильм" />
        <button className="search-form__btn" />
      </div>
      <FilterCheckbox />
    </form>
  )
}

export default SearchForm;