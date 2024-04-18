import styled from "styled-components";

const CheckoutHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const ItemContainer = styled(CheckoutHeader)`
  min-height: 100px;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.span`
  width: 20%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ItemDetails = styled.span`
  width: 25%;
`;

const Quantity = styled(ItemDetails)`
  display: flex;
`;

const Arrow = styled.span`
  cursor: pointer;
`;

const Count = styled.span`
  margin: 0 10px;
`;

const RemoveButton = styled.span`
  padding-right: 20px;
  cursor: pointer;
`;

export {
  CheckoutHeader,
  HeaderBlock,
  ItemContainer,
  ItemDetails,
  ImageContainer,
  Quantity,
  Arrow,
  Count,
  RemoveButton,
};
