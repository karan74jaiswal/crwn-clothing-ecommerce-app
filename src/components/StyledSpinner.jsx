import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";

const StyledSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 85vh;
  align-items: center;
`;

const StyledSpinner = styled(Spinner)`
  width: 100px;
  height: 100px;
  border-width: 5px;
`;

export { StyledSpinnerContainer, StyledSpinner };
