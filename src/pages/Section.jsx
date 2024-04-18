import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList.jsx";
import { SectionContainer, SectionHeading } from "./section.styles.jsx";
import { useProducts } from "../contexts/ProductsContext.js";
function Section() {
  const { category } = useParams();
  const { products } = useProducts();

  return (
    <SectionContainer>
      <SectionHeading>{category}</SectionHeading>
      {products[category] && <ItemList items={products[category]} />}
    </SectionContainer>
  );
}

export default Section;
