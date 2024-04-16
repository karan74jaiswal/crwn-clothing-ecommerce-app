import { useProducts } from "../contexts/ProductsContext";
import ItemList from "../components/ItemList";
import "./shop.scss";
import { Link } from "react-router-dom";
import { Fragment } from "react";
function Shop() {
  const { products } = useProducts();

  return (
    <div className="category-preview-container">
      {Object.entries(products).map((product) => (
        <Fragment key={product[0]}>
          <Link to={product[0]} className="title">
            {product[0]}
          </Link>
          <ItemList items={product[1].slice(0, 4)} className="preview" />
        </Fragment>
      ))}
    </div>
  );
}

export default Shop;
