import React from 'react';
import {nanoid} from 'nanoid';


import ProductCategoryRow from "../ProductCategoryRow";
import ProductRow from "../ProductRow";

function RenderList({ categories, categorie, onlyInStock }) {
  return (
    onlyInStock ? (
      categories[categorie].filter(i => i.stocked).length > 0 && <ProductCategoryRow title={categorie} key={nanoid()}>
        {categories[categorie].filter(v => v.stocked).map((item) => (
          <ProductRow
            name={item.name}
            price={item.price}
            key={nanoid()}
            color={"#79ff7e"}
          />
        ))}
      </ProductCategoryRow>
    ) : (
      <ProductCategoryRow title={categorie} key={nanoid()}>
        {categories[categorie].map((item) => (
          <ProductRow
            name={item.name}
            price={item.price}
            key={nanoid()}
            color={item.stocked ? "#79ff7e" : "#d84242"}
          />
        ))}
      </ProductCategoryRow>
    )
  );
}

export default RenderList;