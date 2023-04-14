import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = (props) => {
  const { data } = useSelector((state) => state.user);

  if (data) return <Route {...props} />;
  else if (!data) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
