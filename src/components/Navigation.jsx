import "./navigation.styles.scss";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthorizationContext";
import { ReactComponent as CrownLogo } from "../assets/crown.svg";
export default function Navigation() {
  const { userAuthObject, signUserOut, userData } = useAuth();

  return (
    <nav className="navigation">
      <NavLink to="/" className="logo-container">
        <CrownLogo className="logo" />
      </NavLink>

      <div className="nav-links-container">
        <NavLink className="nav-link" to="/shop">
          SHOP
        </NavLink>
        {!userAuthObject ? (
          <NavLink className="nav-link" to="/signin">
            SIGN IN
          </NavLink>
        ) : (
          <span className="nav-link" onClick={signUserOut}>
            SIGN OUT
          </span>
        )}
        {userData ? <p className="nav-link">{userData.displayName}</p> : ""}
      </div>
    </nav>
  );
}
