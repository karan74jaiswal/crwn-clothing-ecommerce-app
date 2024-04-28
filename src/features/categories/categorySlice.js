import { getCategoriesAndDocuments } from "../../utils/firebase";

const initialStateCategories = {
  categories: [],
  isLoading: false,
};

const categoriesReducer = function (state = initialStateCategories, action) {
  switch (action.type) {
    case "categories/setCategories":
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
    case "categories/setIsLoading":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

// Action Creators
const setCategoriesAsync = function () {
  return async (dispatch) => {
    dispatch({
      type: "categories/setIsLoading",
    });
    const products = await getCategoriesAndDocuments("categories");
    dispatch({
      type: "categories/setCategories",
      payload: products,
    });
  };
};

export default categoriesReducer;
export { setCategoriesAsync };
