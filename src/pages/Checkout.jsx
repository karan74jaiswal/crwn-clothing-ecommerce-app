import { Navigate, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthorizationContext";
import CheckoutItem from "../components/CheckoutItem";
import "./checkout.scss";
import Button from "../components/Button";
function Checkout() {
  const { userAuthObject: user } = useAuth();
  const { cartItems } = useCart();
  if (!user) return <Navigate to="/signin" replace />;
  return (
    <div className="checkout-container">
      <CheckoutItem key="user123" />
      {cartItems.map((item) => (
        <CheckoutItem item={item} key={item.id} />
      ))}
      <div className="bill-container">
        <h2>
          TOTAL: $
          {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)}
        </h2>
        <Button>Pay Now</Button>
      </div>
    </div>
  );
}

export default Checkout;
