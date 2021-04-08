import React from 'react';

function FilterCheckbox(props) {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    props.onShorts(checked);

  }, [checked]);

  return (
    <div className="filter-checkbox">
      <input type="checkbox" className="filter-checkbox__initial-picture" id="shorts" name="shorts" checked={checked} onChange={() => setChecked(!checked)} />
      <label className="filter-checkbox__label" htmlFor="shorts">Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;