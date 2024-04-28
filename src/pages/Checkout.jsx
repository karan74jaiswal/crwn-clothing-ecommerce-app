import { Navigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import CheckoutItem from "../components/CheckoutItem";
import { CheckoutContainer, BillContainer } from "./checkout.styles.jsx";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import currentUserSelector from "../features/user/userSelector.js";
function Checkout() {
  const { userAuthObject: user } = useSelector(currentUserSelector);
  const { cartItems } = useCart();
  if (!user) return <Navigate to="/signin" replace />;
  return (
    <CheckoutContainer>
      <CheckoutItem key="user123" type="checkout-header" />
      {cartItems.map((item) => (
        <CheckoutItem item={item} key={item.id} />
      ))}
      <BillContainer>
        TOTAL: $
        {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)}
      </BillContainer>
      <Button>Pay Now</Button>
    </CheckoutContainer>
  );
}

export default Checkout;
