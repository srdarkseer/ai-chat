import { AuthContextProps } from "../contexts/AuthContext";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

export const initialState: AuthContextProps = {
  currentUser: null,
  logIn: async () => {
    throw new Error("Not implemented");
  },
  logOut: async () => {
    throw new Error("Not implemented");
  },
  isAuthenticated: false,
  isAuthLoading: true,
};

export function authReducer(
  state: AuthContextProps,
  action: { type: string; payload?: any }
): AuthContextProps {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
        isAuthLoading: false,
      };
    case LOG_OUT:
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
        isAuthLoading: false,
      };
    default:
      return state;
  }
}
