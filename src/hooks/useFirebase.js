import { useState } from "react";
import initAuthentication from "../assets/Firbase/FirebaseAuthentication";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";

initAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  /* -------------------------------------------------------------------------- */
  /*                                  PROVIDERS                                 */
  /* -------------------------------------------------------------------------- */
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  /* -------------------------------------------------------------------------- */
  /*                              UPDATE USER INFO                              */
  /* -------------------------------------------------------------------------- */
  const updateUserInfo = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((err) => {});
  };

  /* -------------------------------------------------------------------------- */
  /*                             CREATE NEW ACCOUNT                             */
  /* -------------------------------------------------------------------------- */
  const createNewAccount = (email, password, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateUserInfo(name);
        setUser(result.user);
      })
      .catch((err) => {});

    setLoading(false);
  };

  /* -------------------------------------------------------------------------- */
  /*                        SIGN IN WITH EMAIL & PASSWORD                       */
  /* -------------------------------------------------------------------------- */
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  /* -------------------------------------------------------------------------- */
  /*                         SIGN IN WITH SOCIAL ACCOUNT                        */
  /* -------------------------------------------------------------------------- */
  const signInWithSocial = (provider) => {
    return signInWithPopup(auth, provider);
  };

  /* -------------------------------------------------------------------------- */
  /*                                 USER LOGOUT                                */
  /* -------------------------------------------------------------------------- */
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((err) => {});
  };

  /* -------------------------------------------------------------------------- */
  /*                               ON AUTH CHANGE                               */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribed;
  }, []);

  return {
    user,
    loading,
    setLoading,
    createNewAccount,
    signInWithEmail,
    signInWithSocial,
    facebookProvider,
    twitterProvider,
    googleProvider,
    logOut,
  };
};

export default useFirebase;
