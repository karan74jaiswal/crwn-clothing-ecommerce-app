import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SignupForm from "../components/SignupForm";
import SigninForm from "../components/SigninForm";
import { AuthenticationContainer } from "./signin.styles.jsx";
import { useSelector } from "react-redux";

function Signin() {
  const { userAuthObject } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userAuthObject) navigate("/");
  }, [userAuthObject, navigate]);

  return (
    <AuthenticationContainer>
      <SigninForm />
      <SignupForm />
    </AuthenticationContainer>
  );
}

export default Signin;
