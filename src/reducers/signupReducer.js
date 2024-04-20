import { useReducer } from "react";
const reducer = (state, action) => {
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

function useSignupReducer() {
  const [signUpFormFields, signupDispatch] = useReducer(reducer, {
    displayName: "",
    email: "",
    password: "",
    retypedPassword: "",
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
  };

  const signupFormReset = () => {
    signupDispatch({ type: "reset" });
  };

  return {
    signUpFormFields,
    handleChange,
    signupFormReset,
  };
}

export default useSignupReducer;
