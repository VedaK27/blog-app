import { useState } from "react";
import { createPost } from "../services/postService";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/global.css";

function CreatePost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createPost({
      title,
      content,
    });

    navigate("/dashboard");
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <h2>Create Post</h2>

            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <button>
              Submit Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;