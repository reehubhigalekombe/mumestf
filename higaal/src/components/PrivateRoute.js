import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const isAuthenticate = !!localStorage.getItem("token");

    return isAuthenticate ? children : <Navigate to="/auth"/>;
}

export default PrivateRoute
