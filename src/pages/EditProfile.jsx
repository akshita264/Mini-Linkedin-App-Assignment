import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import Toast from '../components/Toast';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
  const [form, setForm] = useState({ fullName: '', bio: '' });
  const [toast, setToast] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setForm(res.data));
    }
  }, []);

  const handleUpdate = async () => {
    const token = localStorage.getItem('token');
    await axios.put('/users/me', form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setToast('Profile updated successfully');
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md p-6 mt-10 rounded">
      {toast && <Toast message={toast} onClose={() => setToast('')} />}

      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

      <label className="block text-sm font-medium">Full Name</label>
      <input
        type="text"
        value={form.fullName}
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        className="w-full border rounded px-3 py-2 mb-4"
      />

      <label className="block text-sm font-medium">Bio</label>
      <textarea
        value={form.bio}
        onChange={(e) => setForm({ ...form, bio: e.target.value })}
        className="w-full border rounded px-3 py-2 mb-4"
        rows={4}
      />

      <div className="flex gap-4">
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update
        </button>
        <button
          onClick={() => navigate('/profile')}
          className="text-blue-600 underline"
        >
          Back to Profile
        </button>
      </div>
    </div>
  );
}
