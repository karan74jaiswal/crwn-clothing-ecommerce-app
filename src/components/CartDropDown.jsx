import "./cart-dropdown.scss";
import Button from "./Button";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthorizationContext";
function CartDropDown() {
  const navigate = useNavigate();
  const { userAuthObject } = useAuth();
  const { cartItems, setCartItems, isCartVisible, toggleCartOpen } = useCart();
  if (!isCartVisible) return;

  const handleCheckout = function () {
    toggleCartOpen();
    navigate(`/${!userAuthObject ? "signin" : "checkout"}`);
  };
  return (
    <div className="cart-dropdown-container">
      {!cartItems.length ? (
        <span className="empty-message">Your Cart is empty</span>
      ) : (
        <div className="cart-items"></div>
      )}
      <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropDown;
