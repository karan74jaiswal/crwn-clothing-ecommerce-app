import { createContext, useContext } from "react";
import useCartReducer from "../reducers/cartReducer";

const CartContext = createContext({
  cartItems: [],
  isCartVisible: false,
  toggleCartOpen: () => null,
  addToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeItem: () => {},
});
function CartProvider({ children }) {
  const {
    cartDetails: { cartItems, isCartVisible },
    addToCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    toggleCartOpen,
  } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartVisible,
        toggleCartOpen,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
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
