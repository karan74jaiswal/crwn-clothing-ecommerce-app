import { createContext, useContext, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
const AuthorizationContext = createContext();

function AuthorizationProvider({ children }) {
  const navigate = useNavigate();
  const [userAuthObject, setUserAuthObject] = useState(null);
  const [userData, setUserData] = useState(null);

  const signUserOut = async function () {
    await signOut(auth);
    navigate("/");
  };

  useEffect(() => {
    const unsubscribe = authStateChangeListener(async (user) => {
      if (user) {
        setUserAuthObject(user);
        const data = await getUserData(user);
        setUserData(data);
      } else {
        setUserAuthObject(null);
        setUserData(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthorizationContext.Provider
      value={{
        signInWithGoogle,
        userAuthObject,
        setUserAuthObject,
        auth,
        addUser,
        signUserOut,

        getUserData,
        getRedirectAuthResult,
        userData,
        setUserData,
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
