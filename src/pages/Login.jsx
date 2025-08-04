import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import { useAuth } from '../context/AuthContext';
import Toast from '../components/Toast';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [toast, setToast] = useState('');
  const navigate = useNavigate();
  const { fetchUser } = useAuth();

  
  const handleLogin = async () => {
    try {
        const res = await axios.post('/auth/login', form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      localStorage.setItem('token', res.data.token);
      await fetchUser();
      setToast('Logged in');
      setTimeout(() => navigate('/'), 1000);
    } catch {
      setToast('Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10 space-y-4">
      {toast && <Toast message={toast} onClose={() => setToast('')} />}
      <h2 className="text-xl font-bold">Login</h2>
      <input type="email" placeholder="Email" value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border rounded px-3 py-2" />
      <input type="password" placeholder="Password" value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full border rounded px-3 py-2" />
      <button onClick={handleLogin}
        className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700">Login</button>
    </div>
  );
}
