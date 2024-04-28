import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList.jsx";
import { SectionContainer, SectionHeading } from "./section.styles.jsx";
import { useSelector } from "react-redux";
import categorySelector from "../features/categories/categorySelector.js";
function Section() {
  const { category } = useParams();
  const products = useSelector(categorySelector);

  return (
    <SectionContainer>
      <SectionHeading>{category}</SectionHeading>
      {products[category] && <ItemList items={products[category]} />}
    </SectionContainer>
  );
}

export default Section;
