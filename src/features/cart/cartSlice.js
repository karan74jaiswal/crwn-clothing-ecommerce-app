const initialState = { cartItems: [], isCartVisible: false };

const cartReducer = function (state = initialState, action) {
  const { cartItems, isCartVisible } = state;
  switch (action.type) {
    case "cart/addItem":
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
    case "cart/decreaseItemCount":
      return {
        ...state,
        cartItems: cartItems.map((existingItem) =>
          existingItem.id === action.payload.id
            ? { ...existingItem, quantity: existingItem.quantity - 1 }
            : existingItem
        ),
      };
    case "cart/removeItem":
      return {
        ...state,
        cartItems: cartItems.filter(
          (existingItem) => existingItem.id !== action.payload
        ),
      };
    case "cart/toggleCartVisibility":
      return {
        ...state,
        isCartVisible: !isCartVisible,
      };
    default:
      return state;
  }
};

// Action Creators
const addToCart = (item) => ({ type: "cart/addItem", payload: item });

const removeItem = (itemId) => ({ type: "cart/removeItem", payload: itemId });

const increaseQuantity = (item) => (dispatch) => dispatch(addToCart(item));

const decreaseQuantity = (item) => {
  if (item.quantity > 1)
    return { type: "cart/decreaseItemCount", payload: item };

  return (dispatch) => dispatch(removeItem(item.id));
};
const toggleCartOpen = () => ({ type: "cart/toggleCartVisibility" });

export default cartReducer;
export {
  addToCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  toggleCartOpen,
};
