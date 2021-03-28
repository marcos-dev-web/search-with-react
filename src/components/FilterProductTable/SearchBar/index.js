import React, { useState } from 'react';

import './styles.css';

function SearchBar({handleStock, handleSearch}) {
  const [checked, setChecked] = useState(false);
  const [searchBoxValue, setSearchBoxValue] = useState('');

  function handleChecked() {
    handleStock(!checked)
    setChecked(!checked)
  }

  function handleSearchBox(event) {
    const value = event.target.value;
    handleSearch(value.trim());
    setSearchBoxValue(value);
  }
  
  return (
    <header className="header">
      <input value={searchBoxValue} onChange={handleSearchBox} type="search" className="search_input" placeholder="Search..."/>
      <div className="checkbox">
        <input type="checkbox" onChange={handleChecked} checked={checked} id="checkbox"/>
        <label htmlFor="checkbox">Only products in stock</label>
      </div>
    </header>
  );
}

export default SearchBar;