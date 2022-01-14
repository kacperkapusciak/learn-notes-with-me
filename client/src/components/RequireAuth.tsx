import React from 'react';
import { useIsAuthenticated } from '@azure/msal-react';
import { Navigate, useLocation } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

function RequireAuth({ children }: Props) {
  const isAuthenticated = useIsAuthenticated();

  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
