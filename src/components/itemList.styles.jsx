import styled from "styled-components";

const ItemListContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px 20px;
  width: 100%;
`;

export { ItemListContainer };
