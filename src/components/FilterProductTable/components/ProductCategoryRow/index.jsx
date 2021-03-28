import React from 'react';

import './styles.css';

function ProductCategoryRow(props) {
  return (
    <div className="category_item">
      <div className="title_category">
        <h1>{props.title}</h1>
      </div>
      <div className="container_categories">
        {props.children}
      </div>
    </div>
  );
}

export default ProductCategoryRow;