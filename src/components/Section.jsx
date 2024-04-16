import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./section.scss";
import { useProducts } from "../contexts/ProductsContext";
function Section() {
  const { category } = useParams();
  const { products } = useProducts();

  return (
    <div className="section">
      <h1 className="section-heading">{category}</h1>
      {products[category] && <ItemList items={products[category]} />}
    </div>
  );
}

export default Section;
