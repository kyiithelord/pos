// frontend/src/components/ProductGrid.jsx
import React from 'react';
import ProductCard from './ ProductCard';
const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductGrid;
