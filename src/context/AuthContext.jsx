import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const googleLogin = () => {
    if (!auth) {
      alert('Firebase authentication is not configured. Please add your Firebase credentials to enable login features.');
      return Promise.reject('Firebase not configured');
    }
    return signInWithPopup(auth, provider);
  };

  const login = (email, password) => {
    if (!auth) {
      alert('Firebase authentication is not configured. Please add your Firebase credentials to enable login features.');
      return Promise.reject('Firebase not configured');
    }
    return signInWithEmailAndPassword(auth, email, password);
  };

  const register = (email, password) => {
    if (!auth) {
      alert('Firebase authentication is not configured. Please add your Firebase credentials to enable registration features.');
      return Promise.reject('Firebase not configured');
    }
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    if (!auth) return Promise.resolve();
    return signOut(auth);
  };

  const resetPassword = (email) => {
    if (!auth) {
      alert('Firebase authentication is not configured. Please add your Firebase credentials to enable password reset.');
      return Promise.reject('Firebase not configured');
    }
    return sendPasswordResetEmail(auth, email);
  };

  const updateUser = (profile) => {
    if (!auth || !auth.currentUser) {
      alert('Firebase authentication is not configured. Please add your Firebase credentials to enable profile updates.');
      return Promise.reject('Firebase not configured');
    }
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, googleLogin, login, register, logOut, resetPassword, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
