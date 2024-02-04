// useAuth.ts
import { useContext } from "react";
import { AuthContextProps, AuthContext } from "./AuthContext";

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
