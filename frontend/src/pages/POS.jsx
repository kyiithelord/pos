import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductGrid from '../components/ProductGrid';
import Cart from '../components/Cart';
import CheckoutPanel from '../components/CheckoutPanel';
import '../styles/pos.css';

const POS = () => {
  const [products] = useState([
    { id: 1, name: 'Tea', price: 1000 },
    { id: 2, name: 'Coffee', price: 1500 },
    { id: 3, name: 'Snack', price: 500 },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <div className="pos-container">
      <div className="pos-left">
        <SearchBar />
        <ProductGrid products={products} onAddToCart={addToCart} />
      </div>
      <div className="pos-right">
        <Cart cart={cart} setCart={setCart} />
        <CheckoutPanel cart={cart} />
      </div>
    </div>
  );
};

export default POS;
