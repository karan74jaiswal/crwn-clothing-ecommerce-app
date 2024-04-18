import styled from "styled-components";
import { InvertedButton } from "./button.styles";
const ProductImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

const ProductCard = styled.li`
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  ${InvertedButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    ${ProductImage} {
      opacity: 0.8;
    }
    ${InvertedButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

const ProductDetails = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const ProductName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

const ProductPrice = styled.span`
  width: 10%;
  display: flex;
  justify-content: flex-end;
`;
export { ProductCard, ProductImage, ProductDetails, ProductName, ProductPrice };
