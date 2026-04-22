import { deletePost } from "../services/postService";
import "../styles/global.css";

function PostCard({ post, refresh }) {
  const handleDelete = async () => {
    await deletePost(post._id);
    refresh();
  };

  return (
    <div className="card">
      <h3 style={{ marginBottom: "10px" }}>
        {post.title}
      </h3>

      <p style={{ marginBottom: "15px", lineHeight: "1.5" }}>
        {post.content}
      </p>

      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default PostCard;