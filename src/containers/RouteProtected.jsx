import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const RouteProtected = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    // No está logueado, redirige al login
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RouteProtected;
