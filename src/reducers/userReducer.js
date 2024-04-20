import { useReducer } from "react";

const reducer = function (state, action) {
  switch (action.type) {
    case "setUserAuthObject":
      return { ...state, userAuthObject: action.payload };
    case "setUserData":
      return { ...state, userData: action.payload };

    default:
      console.log("wrong action type passed in userAuth Reducer");
  }
};

function useUserReducer() {
  const [{ userAuthObject, userData }, dispatch] = useReducer(reducer, {
    userAuthObject: null,
    userData: null,
  });
  return {
    userAuthObject,
    userData,
    dispatch,
  };
}

export default useUserReducer;
