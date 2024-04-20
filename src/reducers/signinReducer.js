import { useReducer } from "react";
const reducer = (state, action) => {
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

const useSigninReducer = function () {
  const [signInFormFields, signinDispatch] = useReducer(reducer, {
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const payload = e.target.value;
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

  const signinFormReset = () => {
    signinDispatch({ type: "reset" });
  };

  return {
    signInFormFields,
    handleChange,
    signinFormReset,
  };
};

export default useSigninReducer;
