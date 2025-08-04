import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import { useAuth } from '../context/AuthContext';
import Toast from '../components/Toast';

export default function Register() {
  const [form, setForm] = useState({ fullName: '', email: '', password: '', bio: '' });
  const [toast, setToast] = useState('');
  const navigate = useNavigate();
  const { fetchUser } = useAuth();

  const handleRegister = async () => {
    try {
      const res = await axios.post('/auth/register', form);
      localStorage.setItem('token', res.data.token);
      await fetchUser();
      setToast('Registered successfully');
      setTimeout(() => navigate('/'), 1000);
    } catch {
      setToast('Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10 space-y-4">
      {toast && <Toast message={toast} onClose={() => setToast('')} />}
      <h2 className="text-xl font-bold">Register</h2>
      <input type="text" placeholder="Full Name" value={form.fullName}
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        className="w-full border rounded px-3 py-2" />
      <input type="email" placeholder="Email" value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border rounded px-3 py-2" />
      <input type="password" placeholder="Password" value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full border rounded px-3 py-2" />
      <textarea placeholder="Short Bio" value={form.bio}
        onChange={(e) => setForm({ ...form, bio: e.target.value })}
        className="w-full border rounded px-3 py-2 h-24 resize-none" />
      <button onClick={handleRegister}
        className="w-full bg-green-600 text-white rounded py-2 hover:bg-green-700">Register</button>
    </div>
  );
}
