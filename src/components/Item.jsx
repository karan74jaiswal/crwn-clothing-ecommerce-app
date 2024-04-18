import {
  ProductCard,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductPrice,
} from "./item.styles";
import Button from "./Button";
import { useCart } from "../contexts/CartContext";

function Item({ item }) {
  const { addToCart } = useCart();

  const addProductToCart = () => addToCart(item);
  return (
    <ProductCard>
      <ProductImage src={item.imageUrl} alt={item.name} />
      <Button className="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
      <ProductDetails>
        <ProductName>{item.name}</ProductName>
        <ProductPrice>{item.price}</ProductPrice>
      </ProductDetails>
    </ProductCard>
  );
}

export default Item;
