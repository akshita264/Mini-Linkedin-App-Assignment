import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { useAuth } from '../context/AuthContext';
import Toast from '../components/Toast';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');
  const [toast, setToast] = useState('');
  const { user } = useAuth();

  const fetchPosts = async () => {
    const res = await axios.get('/posts');
    setPosts(res.data);
  };

  const createPost = async () => {
    try {
      await axios.post('/posts', { content });
      setContent('');
      setToast('Post created');
      fetchPosts();
    } catch {
      setToast('You must be logged in to post.');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="space-y-6 mt-4">
      {toast && <Toast message={toast} onClose={() => setToast('')} />}
      {user && (
        <div className="bg-white p-4 rounded shadow">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full border p-2 rounded resize-none"
          />
          <button
            onClick={createPost}
            className="bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      )}

      {posts.map((post) => (
        <div key={post._id} className="bg-white p-4 rounded shadow">
          <p className="font-bold text-blue-800">{post.userId?.fullName}</p>
          <p className="text-gray-600 text-sm mb-1">{new Date(post.createdAt).toLocaleString()}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
