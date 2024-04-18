import { useCart } from "../contexts/CartContext";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const itemsCount = (items) =>
  items.reduce((acc, item) => acc + item.quantity, 0);
function CartIcon() {
  const { cartItems, toggleCartOpen } = useCart();
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <ItemCount>{itemsCount(cartItems)}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
