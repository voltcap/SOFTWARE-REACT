// components/PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const PrivateRoute = ({ requiredRole }) => {
    const token = localStorage.getItem("userToken");

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    try {
        const decoded = jwtDecode(token);
        const userRole = decoded.role;

        if (userRole === requiredRole) {
            return <Outlet />; // ✅ Alt rotaları burada render et
        } else {
            return <Navigate to="/login" replace />;
        }
    } catch (error) {
        console.error("Token decode error:", error);
        return <Navigate to="/login" replace />;
    }
};

export default PrivateRoute;