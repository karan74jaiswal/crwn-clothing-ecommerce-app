import { ReactComponent as Cart } from "../assets/shopping-bag.svg";
import { useCart } from "../contexts/CartContext";
import "./cart-icon.scss";
function CartIcon() {
  const { cartItems, toggleCartOpen } = useCart();
  return (
    <span className="cart-icon-container" onClick={toggleCartOpen}>
      <Cart className="shopping-icon" />
      <p className="item-count">4</p>
    </span>
  );
}

export default CartIcon;
