// import "./cart-dropdown.scss";
import Button from "./Button";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import {
  CartDropDownContainer,
  Message,
  CartItems,
} from "./cartDropDown.styles";

function CartDropDown() {
  const navigate = useNavigate();
  const { cartItems, isCartVisible, toggleCartOpen } = useCart();

  const handleCheckout = function () {
    toggleCartOpen();
    navigate("/checkout");
  };

  if (!isCartVisible) return;
  return (
    <CartDropDownContainer>
      {!cartItems.length ? (
        <Message>Your Cart is empty</Message>
      ) : (
        <CartItems>
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </CartItems>
      )}
      <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
}

export default CartDropDown;
