const CartItem = ({ item, onRemove }) => (
  <div className="cart-item">
    <span>{item.name} x {item.qty}</span>
    <button onClick={() => onRemove(item.id)}>🗑️</button>
  </div>
);

export default CartItem;
