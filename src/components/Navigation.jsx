import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  Navlink,
} from "./navigation.styles";
import { useAuth } from "../contexts/AuthorizationContext";
import { ReactComponent as CrownLogo } from "../assets/crown.svg";
import CartDropDown from "./CartDropDown";
import CartIcon from "./CartIcon";

export default function Navigation() {
  const { userAuthObject, signUserOut } = useAuth();

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
          <Navlink as="span" onClick={signUserOut}>
            SIGN OUT
          </Navlink>
        )}
        <CartIcon />
      </NavLinksContainer>
      <CartDropDown />
    </NavigationContainer>
  );
}
