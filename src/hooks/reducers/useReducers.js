import { useReducer } from "react";
const signupReducer = (state, action) => {
  switch (action.type) {
    case "changeDisplayName":
      return { ...state, displayName: action.payload };
    case "changeEmail":
      return { ...state, email: action.payload };
    case "changePassword":
      return { ...state, password: action.payload };
    case "changeretypedPassword":
      return { ...state, retypedPassword: action.payload };
    case "reset":
      return {
        displayName: "",
        email: "",
        password: "",
        retypedPassword: "",
      };
    default:
      return "Wrong Action Type Passed, No such type Exists";
  }
};
const signinReducer = (state, action) => {
  switch (action.type) {
    case "changeEmail":
      return { ...state, email: action.payload };
    case "changePassword":
      return { ...state, password: action.payload };
    case "reset":
      return { email: "", password: "" };
    default:
      return "Wrong Action Type Passed, No such type Exists";
  }
};

const useReducers = function () {
  const [signUpFormFields, signupDispatch] = useReducer(signupReducer, {
    displayName: "",
    email: "",
    password: "",
    retypedPassword: "",
  });
  const [signInFormFields, signinDispatch] = useReducer(signinReducer, {
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const payload = e.target.value;
    if (e.target.name === "display-name")
      signupDispatch({ type: "changeDisplayName", payload });
    if (e.target.name === "signupEmail")
      signupDispatch({ type: "changeEmail", payload });
    if (e.target.name === "signupPassword")
      signupDispatch({ type: "changePassword", payload });
    if (e.target.name === "retypedPassword")
      signupDispatch({
        type: "changeretypedPassword",
        payload,
      });
    if (e.target.name === "signinEmail")
      signinDispatch({
        type: "changeEmail",
        payload,
      });
    if (e.target.name === "signinPassword")
      signinDispatch({
        type: "changePassword",
        payload,
      });
  };

  const signupFormReset = () => {
    signupDispatch({ type: "reset" });
  };
  const signinFormReset = () => {
    signinDispatch({ type: "reset" });
  };

  return {
    signInFormFields,
    signUpFormFields,
    handleChange,
    signupFormReset,
    signinFormReset,
  };
};

export default useReducers;
