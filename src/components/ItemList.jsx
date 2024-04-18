import Item from "./Item";
import { ItemListContainer } from "./itemList.styles.jsx";
function ItemList({ items }) {
  return (
    <ItemListContainer>
      {items?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ItemListContainer>
  );
}

export default ItemList;
