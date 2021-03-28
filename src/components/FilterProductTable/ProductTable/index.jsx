import React from "react";
import {nanoid} from 'nanoid'; // to generate an unique ID

import "./styles.css";

import ProductCategoryRow from "../components/ProductCategoryRow";
import ProductRow from "../components/ProductRow";

function ProductTable({products: list, onlyStock: onlyInStock}) {

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

        <strong className="title">Price</strong>
      </div>
      <div className="container_products">
        {Object.keys(categories).map((cat) => (
          <ProductCategoryRow title={cat} key={nanoid()}>
            {
              onlyInStock ? (
                categories[cat].map((item) => item.stocked && (
                  <ProductRow name={item.name} price={item.price} key={nanoid()} color={"black"}/>
                ))
              ) : (
                categories[cat].map((item) => (
                  <ProductRow name={item.name} price={item.price} key={nanoid()} color={!item.stocked ? "red" : "black"}/>
                ))
              )
            }
          </ProductCategoryRow>
        ))}
      </div>
    </div>
  );
}

export default ProductTable;
