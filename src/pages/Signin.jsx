import { Outlet, useNavigate } from "react-router-dom";
// import { auth, signInWithGoogle } from "../utils/firebase";
import { useAuth } from "../contexts/AuthorizationContext";
import { useEffect, useState } from "react";
import SignupForm from "../components/SignupForm";
function Signin() {
  const {
    signInWithGoogle,
    userAuthObject,
    setUserAuthObject,
    userData,
    setUserData,
    signUserOut,
    auth,
    addUser,
    getAllUsersData,
    getUserData,
    getRedirectAuthResult,
    emailSignIn,
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
        console.log(userAuthObject);
      };
      fetchResult();
    }
  }, [
    auth,
    getRedirectAuthResult,
    userAuthObject,
    setUserAuthObject,
    getUserData,
    setUserData,
  ]);

  const logGoogleUser = async function () {
    await signInWithGoogle();
    // console.log(await getUserData(userAuth));
    // await addUser(userAuth);
    // setUserObject(userAuth.user);
  };

  // TODO: Make a Email and Password Signin Component and implement that functionality in the app

  return (
    <div>
      <h1>This is Signin page</h1>
      <button onClick={!userAuthObject ? logGoogleUser : signUserOut}>
        {!userAuthObject ? "Sign in with Google" : "Sign Out"}
      </button>
      {userAuthObject && <h1>User Auth Object Recieved</h1>}
      {userData && <h1>User Data Recieved</h1>}
      <SignupForm />
    </div>
  );
}

export default Signin;
