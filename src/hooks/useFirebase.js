import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged   } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../components/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  }
  const logOut = () => {
    setIsLoading(true)
    signOut(auth).then(() => {
      // Sign-out successful.
    }).finally(()=>setIsLoading(false));
  }
  useEffect( () => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({})
      }
      setIsLoading(false)
    });
    return () => unsubscribed;
  }, [])
  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut,
    setUser,
    setIsLoading
  }
}

export default useFirebase;