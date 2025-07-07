import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductGrid from '../components/ProductGrid';
import Cart from '../components/Cart';
import CheckoutPanel from '../components/CheckoutPanel';
import '../styles/pos.css';
import { fetchProducts, postSale } from '../services/api';

const POS = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts).catch(console.error);
  }, []);

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
        <CheckoutPanel cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default POS;
