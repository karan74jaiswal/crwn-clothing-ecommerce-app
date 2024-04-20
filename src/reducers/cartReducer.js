import { useEffect, useReducer } from "react";

const reducer = function (state, action) {
  const { cartItems, isCartVisible } = state;
  switch (action.type) {
    case "addItem":
      const doesItemExists = cartItems.some(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (!doesItemExists)
        return {
          ...state,
          cartItems: [...cartItems, { ...action.payload, quantity: 1 }],
        };
      return {
        ...state,
        cartItems: cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      };
    case "decreaseItemCount":
      return {
        ...state,
        cartItems: cartItems.map((existingItem) =>
          existingItem.id === action.payload.id
            ? { ...existingItem, quantity: existingItem.quantity - 1 }
            : existingItem
        ),
      };
    case "removeItem":
      return {
        ...state,
        cartItems: cartItems.filter(
          (existingItem) => existingItem.id !== action.payload
        ),
      };
    case "toggleCartVisibility":
      return {
        ...state,
        isCartVisible: !isCartVisible,
      };
    default:
      console.log("Wrong Action Type in passed cartReducer");
  }
};
function useCartReducer() {
  const [cartDetails, dispatch] = useReducer(
    reducer,
    {
      cartItems: [],
      isCartVisible: false,
    },
    (initialState) => {
      const temp = localStorage.getItem("cartItems");
      if (temp) {
        const parsedItems = JSON.parse(temp);
        return { ...initialState, cartItems: parsedItems };
      }
      return initialState;
    }
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartDetails.cartItems));
  }, [cartDetails.cartItems]);

  const addToCart = (item) => dispatch({ type: "addItem", payload: item });

  const removeItem = (itemId) =>
    dispatch({ type: "removeItem", payload: itemId });

  const increaseQuantity = (item) => addToCart(item);

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch({ type: "decreaseItemCount", payload: item });
    } else removeItem(item.id);
  };
  const toggleCartOpen = () => dispatch({ type: "toggleCartVisibility" });
  return {
    cartDetails,
    addToCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    toggleCartOpen,
  };
}

export default useCartReducer;
