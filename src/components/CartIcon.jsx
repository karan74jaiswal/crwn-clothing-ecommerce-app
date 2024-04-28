import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import cartSelector from "../features/cart/cartSelector";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartOpen } from "../features/cart/cartSlice";
const itemsCount = (items) =>
  items.reduce((acc, item) => acc + item.quantity, 0);

function CartIcon() {
  const { cartItems } = useSelector(cartSelector);
  const dispatch = useDispatch();

  const handleClick = function () {
    dispatch(toggleCartOpen());
  };
  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon />
      <ItemCount>{itemsCount(cartItems)}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
