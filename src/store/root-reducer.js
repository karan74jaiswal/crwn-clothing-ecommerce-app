import { combineReducers } from "redux";
import userReducer from "../features/user/userSlice";
import categoriesReducer from "../features/categories/categorySlice";
import cartReducer from "../features/cart/cartSlice";
const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export default rootReducer;
