import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./section.scss";
function Section() {
  const { category } = useParams();
  const [items, setItems] = useState(null);
  useEffect(() => {
    async function fetchSection() {
      const sectionData = await (
        await fetch(`http://localhost:3000/${category}`)
      ).json();
      console.log(sectionData);
      setItems(sectionData);
    }
    fetchSection();
  }, [category]);
  return (
    <div className="section">
      <h1 className="section-heading">{category}</h1>
      {items && <ItemList items={items} />}
    </div>
  );
}

export default Section;
