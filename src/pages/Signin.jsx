import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthorizationContext";
import { useEffect } from "react";
import SignupForm from "../components/SignupForm";
import SigninForm from "../components/SigninForm";

function Signin() {
  const {
    userAuthObject,
    setUserAuthObject,
    setUserData,
    auth,
    getUserData,
    getRedirectAuthResult,
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userAuthObject) {
      const fetchResult = async () => {
        const userAuth = await getRedirectAuthResult();
        if (!userAuth) return;
        setUserAuthObject(userAuth);
        const userInfo = await getUserData(userAuth);
        setUserData(userInfo);
      };
      fetchResult();
    } else navigate("/");
  }, [
    auth,
    getRedirectAuthResult,
    userAuthObject,
    setUserAuthObject,
    getUserData,
    setUserData,
    navigate,
  ]);

  return (
    <div>
      <SigninForm />
      <SignupForm />
    </div>
  );
}

export default Signin;
