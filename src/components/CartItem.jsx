import "./cart-item.scss";
function CartItem({ item }) {
  return (
    <div className="cart-item-container">
      <img src={item.imageUrl} alt={item.name} />
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span>
          {item.quantity} x ${item.price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
