import React from 'react';
import { postSale } from '../services/api';

const CheckoutPanel = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  const handlePay = async () => {
    const sale = {
      total,
      items: cart.map(item => ({
        product_id: item.id,
        quantity: item.qty,
        price: item.price,
      })),
    };

    try {
      await postSale(sale);
      alert(`✅ Paid ${total} MMK`);
    } catch (error) {
      console.error('❌ Sale failed:', error.response?.data || error.message);
      alert('❌ Failed to sync. Sale not saved.');
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
