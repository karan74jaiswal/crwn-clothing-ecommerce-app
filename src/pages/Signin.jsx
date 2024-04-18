import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthorizationContext";
import { useEffect } from "react";
import SignupForm from "../components/SignupForm";
import SigninForm from "../components/SigninForm";
import { AuthenticationContainer } from "./signin.styles.jsx";
function Signin() {
  const { userAuthObject } = useAuth();
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
