import "./categories.styles.scss";
import { Link } from "react-router-dom";
const Category = function ({ category }) {
  return (
    <Link to={`/shop/${category.title}`} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};

export default Category;
