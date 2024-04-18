import {
  CartItemContainer,
  ItemDetails,
  ItemName,
  ItemTotal,
} from "./cart-item.styles";
function CartItem({ item }) {
  return (
    <CartItemContainer>
      <img src={item.imageUrl} alt={item.name} />
      <ItemDetails>
        <ItemName>{item.name}</ItemName>
        <ItemTotal>
          {item.quantity} x ${item.price}
        </ItemTotal>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;
