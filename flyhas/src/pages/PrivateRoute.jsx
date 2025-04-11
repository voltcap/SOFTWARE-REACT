import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const PrivateRoute = ({ requiredRole }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/Login" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    if (decoded.role !== requiredRole) {
      return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
  } catch (error) {
    console.error("Token decoding failed:", error);
    return <Navigate to="/Login" replace />;
  }
};

export default PrivateRoute;
