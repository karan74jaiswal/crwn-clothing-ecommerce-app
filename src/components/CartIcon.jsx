import { ReactComponent as Cart } from "../assets/shopping-bag.svg";
import { useCart } from "../contexts/CartContext";
import "./cart-icon.scss";

const itemsCount = (items) =>
  items.reduce((acc, item) => acc + item.quantity, 0);
function CartIcon() {
  const { cartItems, toggleCartOpen } = useCart();
  return (
    <span className="cart-icon-container" onClick={toggleCartOpen}>
      <Cart className="shopping-icon" />
      <p className="item-count">{itemsCount(cartItems)}</p>
    </span>
  );
}

export default CartIcon;
