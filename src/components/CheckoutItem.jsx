import { useCart } from "../contexts/CartContext";
import "./checkoutItem.scss";
function CheckoutItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();
  return (
    <div className="item-container">
      {!item ? (
        <>
          <span>Product</span>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </>
      ) : (
        <>
          <span>
            <img src={item.imageUrl} alt={item.name} />
          </span>
          <span>{item.name}</span>
          <span>
            <button onClick={() => decreaseQuantity(item)}>◀</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item)}>▶</button>
          </span>
          <span>{item.price}</span>
          <span>
            <button onClick={() => removeItem(item.id)}>X</button>
          </span>
        </>
      )}
    </div>
  );
}

export default CheckoutItem;
