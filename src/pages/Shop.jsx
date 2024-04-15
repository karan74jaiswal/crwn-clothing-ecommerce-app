import { useAuth } from "../contexts/AuthorizationContext";
import { useProducts } from "../contexts/ProductsContext";
import ItemList from "../components/ItemList";

function Shop() {
  const { products } = useProducts();
  const { userData } = useAuth();

  return (
    <div>
      <h1>Shop</h1>
      <ItemList items={products} />
    </div>
  );
}

export default Shop;
