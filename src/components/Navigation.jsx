import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  Navlink,
} from "./navigation.styles";

import { signUserOut } from "../utils/firebase";
import { ReactComponent as CrownLogo } from "../assets/crown.svg";
import CartDropDown from "./CartDropDown";
import CartIcon from "./CartIcon";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import currentUserSelector from "../features/user/userSelector";
export default function Navigation() {
  const navigate = useNavigate();
  const { userAuthObject } = useSelector(currentUserSelector);
  const handleSignOut = function () {
    signUserOut();
    navigate("/");
  };
  return (
    <NavigationContainer>
      <LogoContainer to="/">
        <CrownLogo className="logo" />
      </LogoContainer>

      <NavLinksContainer>
        <Navlink to="/shop">SHOP</Navlink>
        {!userAuthObject ? (
          <Navlink to="/signin">SIGN IN</Navlink>
        ) : (
          <Navlink as="span" onClick={handleSignOut}>
            SIGN OUT
          </Navlink>
        )}
        <CartIcon />
      </NavLinksContainer>
      <CartDropDown />
    </NavigationContainer>
  );
}
