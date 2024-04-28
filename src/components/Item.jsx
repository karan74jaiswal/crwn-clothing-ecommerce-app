import {
  ProductCard,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductPrice,
} from "./item.styles";
import Button from "./Button";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

function Item({ item }) {
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addToCart(item));
  return (
    <ProductCard>
      <ProductImage src={item.imageUrl} alt={item.name} />
      <Button className="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
      <ProductDetails>
        <ProductName>{item.name}</ProductName>
        <ProductPrice>${item.price}</ProductPrice>
      </ProductDetails>
    </ProductCard>
  );
}

export default Item;
