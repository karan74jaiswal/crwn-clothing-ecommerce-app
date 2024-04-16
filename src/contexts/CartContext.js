import { createContext, useContext, useEffect, useState } from "react";

const addCartItem = function (cartItems, itemToAdd) {
  const doesItemExists = cartItems.some(
    (cartItem) => cartItem.id === itemToAdd.id
  );
  if (!doesItemExists) return [...cartItems, { ...itemToAdd, quantity: 1 }];

  return cartItems.map((cartItem) =>
    cartItem.id === itemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};
const CartContext = createContext({
  cartItems: [],
  setCartItems: () => null,
  isCartVisible: false,
  toggleCartOpen: () => null,
  addToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeItem: () => {},
});
function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const temp = localStorage.getItem("cartItems");
    if (!temp) return [];
    return JSON.parse(temp);
  });
  const [isCartVisible, setIsCartVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = function (item) {
    setCartItems(addCartItem(cartItems, item));
  };

  const increaseQuantity = (item) => {
    addToCart(item);
  };
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      setCartItems((existingItems) =>
        existingItems.map((existingItem) =>
          existingItem.id === item.id
            ? { ...existingItem, quantity: existingItem.quantity - 1 }
            : existingItem
        )
      );
    } else removeItem(item.id);
  };

  const removeItem = (itemId) => {
    setCartItems((existingItems) =>
      [...existingItems].filter((existingItem) => existingItem.id !== itemId)
    );
  };

  const toggleCartOpen = () => setIsCartVisible((v) => !v);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
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
