import { Link, useNavigate } from "react-router-dom";
import { removeToken } from "../utils/storage";
import "../styles/global.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <div style={styles.navbar}>
      <h2 style={{ color: "#6c8cff" }}>Blog App</h2>

      <div>
        <Link className="link" to="/dashboard">
          Dashboard
        </Link>

        <Link className="link" to="/create">
          Create Post
        </Link>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    marginBottom: "20px",
  },
};

export default Navbar;