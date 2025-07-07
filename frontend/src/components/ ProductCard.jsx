import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div onClick={() => onAddToCart(product)} style={{ border: '1px solid #ccc', padding: 10, margin: 10, cursor: 'pointer' }}>
      <h4>{product.name}</h4>
      <p>Price: Ks {product.price}</p>
    </div>
  );
};

export default ProductCard;
