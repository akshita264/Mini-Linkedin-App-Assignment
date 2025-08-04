import { useState } from 'react';
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    const res = await axios.get('/users/all'); // Adjust this if you implement filtered search on backend
    const filtered = res.data.filter((user) =>
      user.fullName.toLowerCase().includes(query.toLowerCase())
    );
    setUsers(filtered);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Search Users</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow border px-3 py-2 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {users.length > 0 ? (
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user._id}
              className="border p-3 rounded cursor-pointer hover:bg-gray-100"
              onClick={() => navigate(`/profile/${user._id}`)}
            >
              <p className="font-semibold">{user.fullName}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No users found</p>
      )}
    </div>
  );
}
