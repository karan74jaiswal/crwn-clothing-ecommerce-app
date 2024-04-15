import "./itemList.scss";
import Button from "./Button";
function Item({ item }) {
  return (
    <li className="item">
      <div
        className="item-image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      >
        <Button className="inverted add-to-cart-btn">Add to cart</Button>
      </div>
      <div className="item-details">
        <span className="item-name">{item.name}</span>
        <span className="item-price">{item.price}</span>
      </div>
    </li>
  );
}

export default Item;
