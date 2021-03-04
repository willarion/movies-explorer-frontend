import React from 'react';

function FilterCheckbox(props) {

  return (
    <div className="filter-checkbox">
      <input type="checkbox" className="filter-checkbox__initial-picture" id="shorts" name="shorts" value="yes" />
      <label className="filter-checkbox__label" htmlFor="shorts">Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;