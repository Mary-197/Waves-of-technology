import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

const isAuthenticated = () => {
  // Você pode trocar isso por uma verificação real, como token no contexto ou localStorage
  return localStorage.getItem("token") !== null;
};

const PrivateRoute = ({ children }: Props) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    // Redireciona para login e salva rota desejada
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>; // Fragmento garante retorno válido de ReactNode
};

export default PrivateRoute;