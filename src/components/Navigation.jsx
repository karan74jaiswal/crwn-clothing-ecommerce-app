import "./navigation.styles.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthorizationContext";

export default function Navigation() {
  const navigate = useNavigate();
  const { userAuthObject, signUserOut, userData } = useAuth();

  const handleSignOut = () => {
    signUserOut();
    navigate("/");
  };
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
          <span className="nav-link" onClick={handleSignOut}>
            SIGN OUT
          </span>
        )}
        {userData ? <p>{userData.displayName}</p> : ""}
      </div>
    </nav>
  );
}
