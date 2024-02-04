import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Loader from "../assets/images/loading.svg";

const PublicRoute = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, isAuthLoading } = authContext || {};

  if (isAuthLoading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50">
        <img src={Loader} alt="Loading..." />
      </div>
    );
  }

  if (!isAuthLoading && isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
};

export default PublicRoute;
