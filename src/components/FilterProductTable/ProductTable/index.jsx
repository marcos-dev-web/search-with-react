import React from "react";
import { nanoid } from "nanoid"; // to generate an unique ID

import "./styles.css";

import RenderList from '../components/RenderList';

function ProductTable({ products: list, onlyStock: onlyInStock }) {
  const categories = {};

  list.forEach((product) => {
    if (!(product.category in categories)) {
      categories[product.category] = [product];
    } else {
      categories[product.category].push(product);
    }
  });

  return (
    <div className="body_search">
      <div className="header_names">
        <strong className="title">Name</strong>
        <span></span>
        <strong className="title">Price</strong>
      </div>
      <div className="container_products">
        {Object.keys(categories).map((categorie) => <RenderList categories={categories} categorie={categorie} key={nanoid()} onlyInStock={onlyInStock}/>)}
      </div>
    </div>
  );
}

export default ProductTable;
