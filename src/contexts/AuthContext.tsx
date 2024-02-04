// AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export interface AuthContextProps {
  currentUser: firebase.User | null;
  logIn: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  logOut: () => Promise<void>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  // Function to log in
  async function logIn(email: string, password: string) {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      // Save the token in sessionStorage
      const token = await userCredential.user?.getIdToken();
      if (token) {
        sessionStorage.setItem("token", token);
      }
      return userCredential;
    } catch (error) {
      // Handle login error
      console.error(error);
      throw error;
    }
  }

  // Function to log out
  async function logOut() {
    try {
      await auth.signOut();
      // Remove the token from sessionStorage
      sessionStorage.removeItem("token");
    } catch (error) {
      // Handle logout error
      console.error(error);
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const isAuthenticated = currentUser !== null;

  const value: AuthContextProps = {
    currentUser,
    logIn,
    logOut,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
