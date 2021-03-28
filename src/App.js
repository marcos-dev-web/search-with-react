import React from 'react';

import FilterProductTable from './components/FilterProductTable';

function App() {
  
  // you can get data from an API
  const products = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: false,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: false,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
    {
      category: "Electronics",
      price: "$299.99",
      stocked: true,
      name: "Samsumg A10",
    },
    {
      category: "Cars",
      price: "$10.000",
      stocked: true,
      name: "Toyota",
    },
    {
      category: "Cars",
      price: "$11.000",
      stocked: false,
      name: "Chevrolet",
    },
    {
      category: "Cars",
      price: "$20.000",
      stocked: false,
      name: "Tesla",
    },
    {
      category: "Games",
      price: "$4",
      stocked: true,
      name: "Tic Tac Toe",
    },
    {
      category: "Games",
      price: "$8",
      stocked: true,
      name: "Soccer",
    },
  ];

  return (
    <FilterProductTable products={products}/>
  );
}

export default App;
