import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  setCartItems: () => null,
  isCartVisible: false,
  setIsCartVisible: () => null,
});
function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartOpen = () => setIsCartVisible((v) => !v);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        isCartVisible,
        toggleCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const useCart = function () {
  const context = useContext(CartContext);
  if (!context) console.warn("Cart Context used outside of Cart Provider");
  return context;
};
export { CartProvider, useCart };
