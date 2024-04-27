const initialStateUser = { userAuthObject: null, userData: null };

const userReducer = function (state = initialStateUser, action) {
  switch (action.type) {
    case "user/setUserAuthObject":
      return { ...state, userAuthObject: action.payload };
    case "user/setUserData":
      return { ...state, userData: action.payload };

    default:
      return state;
  }
};

// Action Creator Functions
const setUserAuthObject = function (userAuth = null) {
  return {
    type: "user/setUserAuthObject",
    payload: userAuth,
  };
};

const setUserData = function (data = null) {
  return {
    type: "user/setUserData",
    payload: data,
  };
};

export default userReducer;

export { setUserAuthObject, setUserData };
