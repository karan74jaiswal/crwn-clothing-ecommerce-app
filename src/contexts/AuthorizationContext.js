import { createContext, useContext, useState } from "react";
import {
  auth,
  signInWithGoogle,
  signOut,
  addUser,
  getAllUsersData,
  getUserData,
} from "../utils/firebase";
const AuthorizationContext = createContext();

function AuthorizationProvider({ children }) {
  const [userObject, setUserObject] = useState(null);
  return (
    <AuthorizationContext.Provider
      value={{
        signInWithGoogle,
        userObject,
        setUserObject,
        auth,
        addUser,
        signOut,
        getAllUsersData,
        getUserData,
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
