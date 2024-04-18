import styled from "styled-components";
import { ReactComponent as Cart } from "../assets/shopping-bag.svg";

const ShoppingIcon = styled(Cart)`
  width: 24px;
  height: 24px;
`;

const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

export { CartIconContainer, ItemCount, ShoppingIcon };
