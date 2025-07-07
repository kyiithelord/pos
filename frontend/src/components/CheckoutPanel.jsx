const CheckoutPanel = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  const handlePay = () => {
    alert(`Paid ${total} MMK`);
    // send to backend or store locally
  };

  return (
    <div className="checkout-panel">
      <h3>Total: {total} MMK</h3>
      <button onClick={handlePay}>Pay</button>
    </div>
  );
};

export default CheckoutPanel;
