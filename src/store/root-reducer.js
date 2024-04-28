import { combineReducers } from "redux";
import userReducer from "../features/user/userSlice";
import categoriesReducer from "../features/categories/categorySlice";
const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});

export default rootReducer;
