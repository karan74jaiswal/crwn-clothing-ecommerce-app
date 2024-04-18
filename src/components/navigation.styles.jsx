import styled from "styled-components";
import { NavLink } from "react-router-dom";
const NavigationContainer = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LogoContainer = styled(NavLink)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 25px;
`;

const Navlink = styled(NavLink)`
  padding: 10px 15px;
  cursor: pointer;
`;

export { NavigationContainer, LogoContainer, NavLinksContainer, Navlink };
