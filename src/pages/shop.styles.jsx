import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled(Link)`
  font-size: 28px;
  margin: 25px 0;
  cursor: pointer;
  text-transform: capitalize;
`;
export { CategoryPreviewContainer, Title };
