import React from 'react';

import './styles.css';

function ProductRow({color, price, name}) {
  return (
    <div className="item">
      <p className="name" style={{color,}}>{name}</p>
      <p className="price">{price}</p>
    </div>
  );
}

export default ProductRow;