import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../features/cart/cartSlice.js";
import { useDispatch } from "react-redux";

import {
  CheckoutHeader,
  HeaderBlock,
  ItemContainer,
  ImageContainer,
  ItemDetails,
  Quantity,
  Arrow,
  Count,
  RemoveButton,
} from "./checkoutItem.styles.jsx";

function CheckoutItem({ item, type }) {
  const dispatch = useDispatch();
  return type ? (
    <CheckoutHeader>
      <HeaderBlock>Product</HeaderBlock>
      <HeaderBlock>Description</HeaderBlock>
      <HeaderBlock>Quantity</HeaderBlock>
      <HeaderBlock>Price</HeaderBlock>
      <HeaderBlock>Remove</HeaderBlock>
    </CheckoutHeader>
  ) : (
    <ItemContainer>
      <ImageContainer>
        <img src={item.imageUrl} alt={item.name} />
      </ImageContainer>
      <ItemDetails>{item.name}</ItemDetails>
      <Quantity>
        <Arrow onClick={() => dispatch(decreaseQuantity(item))}>&#10094;</Arrow>
        <Count>{item.quantity}</Count>

        <Arrow onClick={() => dispatch(increaseQuantity(item))}>&#10095;</Arrow>
      </Quantity>
      <ItemDetails>{item.price}</ItemDetails>

      <RemoveButton onClick={() => dispatch(removeItem(item.id))}>
        &#10005;
      </RemoveButton>
    </ItemContainer>
  );
}

export default CheckoutItem;
