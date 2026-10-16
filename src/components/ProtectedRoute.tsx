import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import NavBar from './NavBar';

function ProtectedRoute() {
  const { isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  return (
    <>
      <NavBar onSignOut={handleSignOut} />
      <Outlet />
    </>
  );
}

export default ProtectedRoute;
