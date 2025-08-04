import { useEffect, useState } from 'react';
import axios from '../utils/axios';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get('/users/me');
      setUser(res.data);
      const postRes = await axios.get(`/posts/user/${res.data._id}`);
      setPosts(postRes.data);
    })();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="space-y-4 mt-4">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-bold">{user.fullName}</h2>
        <p className="text-gray-600">{user.bio}</p>
      </div>
      <h3 className="text-xl font-semibold">My Posts</h3>
      {posts.map(p => (
        <div key={p._id} className="bg-white p-4 rounded shadow">
          <p>{p.content}</p>
          <small className="text-gray-500">{new Date(p.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
