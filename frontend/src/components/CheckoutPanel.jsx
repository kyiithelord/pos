import React from 'react';
import { postSale } from '../services/api';

const CheckoutPanel = ({ cart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  const handlePay = async () => {
    const saleData = {
      items: cart.map(item => ({
        product_id: item.id,
        quantity: item.qty,
        subtotal: item.qty * item.price
      })),
      total
    };

    try {
      await postSale(saleData);
      alert(`✅ Paid ${total} MMK`);
      setCart([]);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to sync. Save to IndexedDB instead (todo).");
    }
  };

  return (
    <div className="checkout-panel">
      <h3>Total: {total} MMK</h3>
      <button onClick={handlePay}>Pay</button>
    </div>
  );
};

export default CheckoutPanel;
