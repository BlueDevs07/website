import { createContext, useContext, useEffect, useState } from "react";
import { app } from "./FirebaseConfig";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signout,
} from "firebase/auth";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
  photo: user.photoURL,
});

export function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  async function signup() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }

  async function getAuthToken() {
    return await auth.currentUser.getIdToken();
  }

  async function logout() {
    setAuthUser(null);
    signout(auth);
  }

  return {
    authUser,
    loading,
    signup,
    getAuthToken,
  };
}
const authUserContext = createContext({
  authUser: null,
  loading: true,
});

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export const useAuth = () => useContext(authUserContext);
