import { useState } from "react";
import { API_BASE_URL } from "../../config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);

        localStorage.setItem("userName", email.split("@")[0]);

        alert("Login Successful");
        console.log("Redirecting...");

        window.location.href = `https://zerodha-clone-dashboard-ws5h.onrender.com?user=${email.split("@")[0]}`;
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

      <p className="mt-3">
        Don't have an account? <a href="/signup">Signup</a>
      </p>
    </div>
  );
}

export default Login;
