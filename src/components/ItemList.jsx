import Item from "./Item";
import "./itemList.scss";
function ItemList({ items }) {
  return (
    <ul className="item-list">
      {items?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ItemList;
