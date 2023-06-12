import React from 'react'
import { Navigate } from "react-router-dom";


const LoginProtectRouters = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return children
    } else {
        return <Navigate to="/portfolio" replace />;
    }
}

export default LoginProtectRouters