"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function PostsTable() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Post[]>(API_URL)
      .then((res) => setPosts(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-gray-400 text-center py-10">Loading posts…</p>;
  }

  if (error) {
    return <p className="text-red-400 text-center py-10">Error: {error}</p>;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-700">
      <table className="w-full text-sm text-left text-gray-300">
        <thead className="text-xs uppercase bg-gray-800 text-gray-400">
          <tr>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">User ID</th>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr
              key={post.id}
              className="border-t border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              <td className="px-4 py-3">{post.id}</td>
              <td className="px-4 py-3">{post.userId}</td>
              <td className="px-4 py-3 font-medium text-white">{post.title}</td>
              <td className="px-4 py-3">{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
