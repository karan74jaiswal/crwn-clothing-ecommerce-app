import "./navigation.styles.scss";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthorizationContext";

export default function Navigation() {
  const { userAuthObject, signUserOut } = useAuth();
  return (
    <nav className="navigation">
      <NavLink to="/" className="logo-container">
        <img src="crown.svg" alt="crwn-logo" className="logo" />
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
        <p></p>
      </div>
    </nav>
  );
}
