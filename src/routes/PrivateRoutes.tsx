// PrivateRoute.js

import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"; // Import your authentication context

const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext); // Use the authentication context to check if the user is authenticated

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace /> // Redirect to the login page if not authenticated
  );
};

export default PrivateRoute;
