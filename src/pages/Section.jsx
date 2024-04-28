import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList.jsx";
import { SectionContainer, SectionHeading } from "./section.styles.jsx";
import { useSelector } from "react-redux";
import categorySelector from "../features/categories/categorySelector.js";
import {
  StyledSpinner,
  StyledSpinnerContainer,
} from "../components/StyledSpinner.jsx";
function Section() {
  const { category } = useParams();
  const { categories: products, isLoading } = useSelector(categorySelector);

  return (
    <SectionContainer>
      <SectionHeading>{category}</SectionHeading>

      {isLoading ? (
        <StyledSpinnerContainer>
          <StyledSpinner />
        </StyledSpinnerContainer>
      ) : (
        <ItemList items={products[category]} />
      )}
    </SectionContainer>
  );
}

export default Section;
