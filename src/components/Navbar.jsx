import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  const initials = user
    ? user.fullName.split(' ').map((n) => n[0]).join('').toUpperCase()
    : '';

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Mini LinkedIn</Link>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/search" className="hover:underline">Search</Link>

        {user ? (
          <>
            <button
              onClick={() => navigate('/profile')}
              className="flex items-center gap-2 hover:underline"
            >
              <span className="bg-white text-blue-600 px-2 py-1 rounded-full font-bold">{initials}</span>
              {user.fullName}
            </button>
            <button onClick={handleLogout} className="hover:underline">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
