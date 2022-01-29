import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import LoadingSpinner from "../../Components/LoadingSpinner";

const RequireAuth = ({ children, ...rest }) => {
  const { isLoading, isLoggedIn } = useAuth();

  let location = useLocation();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default RequireAuth;
