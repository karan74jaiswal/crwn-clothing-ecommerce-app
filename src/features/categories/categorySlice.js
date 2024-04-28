const initialStateCategories = {
  categories: [],
};

const categoriesReducer = function (state = initialStateCategories, action) {
  switch (action.type) {
    case "categories/setCategories":
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

// Action Creators
const setCategories = function (categories) {
  return {
    type: "categories/setCategories",
    payload: categories,
  };
};

export default categoriesReducer;
export { setCategories };
