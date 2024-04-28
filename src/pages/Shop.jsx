import ItemList from "../components/ItemList";
import { CategoryPreviewContainer, Title } from "./shop.styles.jsx";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import categorySelector from "../features/categories/categorySelector.js";
function Shop() {
  const { categories: products } = useSelector(categorySelector);

  return (
    <CategoryPreviewContainer>
      {Object.entries(products).map((product) => (
        <Fragment key={product[0]}>
          <Title to={product[0]}>{product[0]}</Title>
          <ItemList items={product[1].slice(0, 4)} />
        </Fragment>
      ))}
    </CategoryPreviewContainer>
  );
}

export default Shop;
