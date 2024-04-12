import { createContext, useContext, useState } from "react";
import {
  auth,
  signInWithGoogle,
  signOut,
  addUser,
  getAllUsersData,
  getUserData,
  getRedirectAuthResult,
  emailSignup,
  emailSignIn,
} from "../utils/firebase";
const AuthorizationContext = createContext();

function AuthorizationProvider({ children }) {
  const [userAuthObject, setUserAuthObject] = useState(null);
  const [userData, setUserData] = useState(null);

  const signUserOut = async function () {
    await signOut(auth);
    setUserAuthObject(null);
    setUserData(null);
  };
  return (
    <AuthorizationContext.Provider
      value={{
        signInWithGoogle,
        userAuthObject,
        setUserAuthObject,
        auth,
        addUser,
        signUserOut,
        getAllUsersData,
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
