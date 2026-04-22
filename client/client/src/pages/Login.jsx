import { useState } from "react";
import { loginUser } from "../services/authService";
import { setToken } from "../utils/storage";
import { useNavigate, Link } from "react-router-dom";
import "../styles/global.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await loginUser({
      email,
      password,
    });

    setToken(res.data.token);

    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>
            Login
          </button>

          <p style={{ marginTop: "15px" }}>
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;