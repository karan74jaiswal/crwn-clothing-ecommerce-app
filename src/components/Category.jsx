import {
  CategoryContainer,
  BackGroundImage,
  CategoryBodyContainer,
} from "./category.styles.jsx";

const Category = function ({ category }) {
  const { title, imageUrl, route } = category;
  return (
    <CategoryContainer to={route}>
      <BackGroundImage $imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default Category;
