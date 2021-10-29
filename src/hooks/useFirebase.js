import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged   } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../components/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState();

  const auth = getAuth();

  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      });
  }
  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    })
  }
  useEffect( () => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({})
      }
    });
    return () => unsubscribed;
  }, [])
  return {
    user,
    signInUsingGoogle,
    logOut
  }
}

export default useFirebase;