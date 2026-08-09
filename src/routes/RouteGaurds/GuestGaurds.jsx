import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuestGuard = ({ component: Component }) => {
  const isAuthenticated = useSelector(state => state.auth.user);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Component />;
};

export default GuestGuard;