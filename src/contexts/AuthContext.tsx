import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../config/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { authReducer, initialState } from "../reducers/authReducer";

export interface AuthContextProps {
  currentUser: firebase.User | null;
  logIn: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  logOut: () => Promise<void>;
  isAuthenticated: boolean;
  isAuthLoading: boolean;
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
  const [state, dispatch] = useReducer(authReducer, initialState); // Use authReducer

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
      dispatch({ type: "LOG_IN", payload: userCredential.user });
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
      dispatch({ type: "LOG_OUT" });
    } catch (error) {
      // Handle logout error
      console.error(error);
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch({ type: user ? "LOG_IN" : "LOG_OUT", payload: user }); // Dispatch LOG_IN or LOG_OUT action
    });

    return unsubscribe;
  }, []);

  const isAuthenticated = state.currentUser !== null;

  const value: AuthContextProps = {
    ...state,
    logIn,
    logOut,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
