import { useCart } from "../contexts/CartContext";
import "./checkoutItem.scss";
function CheckoutItem({ item, className }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();
  return (
    <div className={className || "item-container"}>
      {!item ? (
        <>
          <span className="header-block">Product</span>
          <span className="header-block">Description</span>
          <span className="header-block">Quantity</span>
          <span className="header-block">Price</span>
          <span className="header-block">Remove</span>
        </>
      ) : (
        <>
          <span className="image-container">
            <img src={item.imageUrl} alt={item.name} />
          </span>
          <span className="name">{item.name}</span>
          <span className="quantity">
            <span className="arrow" onClick={() => decreaseQuantity(item)}>
              &#10094;
            </span>
            <span className="value">{item.quantity}</span>
            <span className="arrow" onClick={() => increaseQuantity(item)}>
              &#10095;
            </span>
          </span>
          <span className="price">{item.price}</span>

          <span className="remove-button" onClick={() => removeItem(item.id)}>
            &#10005;
          </span>
        </>
      )}
    </div>
  );
}

export default CheckoutItem;
