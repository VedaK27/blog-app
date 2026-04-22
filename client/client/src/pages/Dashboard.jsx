import { useEffect, useState } from "react";
import { getPosts } from "../services/postService";
import PostCard from "../components/PostCard";
import Navbar from "../components/Navbar";
import "../styles/global.css";

function Dashboard() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await getPosts();
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        <h2>All Posts</h2>

        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              refresh={fetchPosts}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;