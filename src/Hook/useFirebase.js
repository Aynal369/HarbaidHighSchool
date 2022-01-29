import { useEffect, useState } from "react";
import firebaseInitialize from "../Authentication/Firebase/firebaseInitialize";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [friends, setFriends] = useState([]);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
      } else {
        setUser({});
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, [auth]);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const handleSignOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        // swal("Alert!", "Successfully logged out", "warning");
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    isLoggedIn,
    friends,
    setFriends,
    signInWithGoogle,
    handleSignOut,
  };
};

export default useFirebase;
