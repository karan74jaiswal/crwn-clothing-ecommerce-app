import Item from "./Item";
import "./itemList.scss";
function ItemList({ items, className }) {
  return (
    <ul className={`item-list ${className}`}>
      {items?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ItemList;
