import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import cartSelector from "../features/cart/cartSelector";
import { toggleCartOpen } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import {
  CartDropDownContainer,
  Message,
  CartItems,
} from "./cartDropDown.styles";

function CartDropDown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, isCartVisible } = useSelector(cartSelector);

  if (!isCartVisible) return;
  const handleCheckout = function () {
    dispatch(toggleCartOpen());
    navigate("/checkout");
  };
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
