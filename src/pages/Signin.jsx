import { Outlet, useNavigate } from "react-router-dom";
// import { auth, signInWithGoogle } from "../utils/firebase";
import { useAuth } from "../contexts/AuthorizationContext";
import { useEffect } from "react";
function Signin() {
  const {
    signInWithGoogle,
    userObject,
    setUserObject,
    signOut,
    auth,
    addUser,
    getAllUsersData,
    getUserData,
  } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (userObject) navigate("/");
  // }, [userObject, navigate]);

  const logGoogleUser = async function () {
    const userAuth = await signInWithGoogle();
    console.log(await getUserData(userAuth));
    // await addUser(userAuth);
    setUserObject(userAuth.user);
  };

  const signUserOut = async function () {
    await signOut(auth);
    setUserObject(null);
  };
  return (
    <div>
      <h1>This is Signin page</h1>
      <button onClick={!userObject ? logGoogleUser : signUserOut}>
        {!userObject ? "Sign in with Google" : "Sign Out"}
      </button>
    </div>
  );
}

export default Signin;
