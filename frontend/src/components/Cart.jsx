import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, setCart }) => {
  const removeItem = (id) => setCart(cart.filter(item => item.id !== id));

  return (
    <div className="cart-panel">
      <h3>Cart</h3>
      {cart.map(item => (
        <CartItem key={item.id} item={item} onRemove={removeItem} />
      ))}
    </div>
  );
};

export default Cart;
