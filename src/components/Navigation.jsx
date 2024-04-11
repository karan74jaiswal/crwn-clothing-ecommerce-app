import "./navigation.styles.scss";
import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" className="logo-container">
        <img src="crown.svg" alt="crwn-logo" className="logo" />
      </NavLink>

      <div className="nav-links-container">
        <NavLink className="nav-link" to="/shop">
          SHOP
        </NavLink>
        <NavLink className="nav-link" to="/signin">
          SIGN IN
        </NavLink>
        <p></p>
      </div>
    </nav>
  );
}
