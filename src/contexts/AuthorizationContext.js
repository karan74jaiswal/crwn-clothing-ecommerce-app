import { createContext, useContext, useEffect } from "react";
import {
  auth,
  signInWithGoogle,
  signOut,
  addUser,
  getUserData,
  getRedirectAuthResult,
  emailSignup,
  emailSignIn,
  authStateChangeListener,
} from "../utils/firebase";
import useUserReducer from "../reducers/userReducer";
import { useNavigate } from "react-router-dom";
const AuthorizationContext = createContext();

function AuthorizationProvider({ children }) {
  const navigate = useNavigate();
  const { userAuthObject, userData, dispatch } = useUserReducer();

  const signUserOut = async function () {
    await signOut(auth);
    navigate("/");
  };

  useEffect(() => {
    const unsubscribe = authStateChangeListener(async (user) => {
      if (user) {
        dispatch({ type: "setUserAuthObject", payload: user });
        const data = await getUserData(user);
        dispatch({ type: "setUserData", payload: data });
      } else {
        dispatch({ type: "setUserAuthObject", payload: null });
        dispatch({ type: "setUserData", payload: null });
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <AuthorizationContext.Provider
      value={{
        signInWithGoogle,
        userAuthObject,
        auth,
        addUser,
        signUserOut,
        getUserData,
        getRedirectAuthResult,
        userData,
        emailSignup,
        emailSignIn,
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthorizationContext);
  return context;
}

export { AuthorizationProvider, useAuth };
