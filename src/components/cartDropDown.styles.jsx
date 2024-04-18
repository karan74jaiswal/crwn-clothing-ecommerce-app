import styled from "styled-components";
import { ButtonContainer } from "./button.styles";

const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${ButtonContainer} {
    margin-top: auto;
  }
`;

const Message = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export { CartDropDownContainer, Message, CartItems };
