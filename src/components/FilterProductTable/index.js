import React, { useState, useEffect } from 'react';
import './styles.css';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterProductTable({products}) {
  const [productsList, setProductsList] = useState(products);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  function handleStock(isInStock) {
    setOnlyInStock(isInStock);
  }
 
  useEffect(() => {
    if (searchValue.length > 0) {
      setProductsList(products.filter(product => product.name.toLowerCase().match(new RegExp(searchValue)) !== null));
    } else {
      setProductsList(products);
    }
  }, [searchValue, products])

  function handleSearch(value) {
    setSearchValue(value.toLowerCase());    
  }

  return (
    <main className="container_main">
      <SearchBar handleStock={handleStock} handleSearch={handleSearch}/>
      <ProductTable products={productsList} onlyStock={onlyInStock}/>
    </main>
  );
}

export default FilterProductTable;