// src/router/RouteGaurds/AuthGaurd.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGaurd = ({ component: Component }) => {
  const isAuthenticated = useSelector(state => state.auth.user) 

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Component />;
};

export default AuthGaurd;