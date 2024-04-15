import "./cart-dropdown.scss";
import Button from "./Button";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthorizationContext";
import CartItem from "./CartItem";

function CartDropDown() {
  const navigate = useNavigate();
  const { userAuthObject } = useAuth();
  const { cartItems, isCartVisible, toggleCartOpen } = useCart();
  if (!isCartVisible) return;
  console.log(cartItems);

  const handleCheckout = function () {
    toggleCartOpen();
    // navigate(`/${!userAuthObject ? "signin" : "checkout"}`);
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      {!cartItems.length ? (
        <span className="empty-message">Your Cart is empty</span>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      )}
      <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropDown;
