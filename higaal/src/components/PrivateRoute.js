import React from 'react';
import { Navigate } from 'react-router-dom';

export default  function PrivateRoute({children}) {
    const token = localStorage.getItem("token");
    console.log("Token  in priveteRoute:", token)
    if(!token) {
        return <Navigate to="/auth" replace />
    }
  return children
}






