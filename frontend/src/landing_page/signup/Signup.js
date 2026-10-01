import { useState } from "react";
import { API_BASE_URL } from "../../config";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      alert(data.message || (response.ok ? "Signup successful" : "Signup failed"));

      if (response.ok) {
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Signup request failed:", error);
      alert("Unable to reach the server. Check that the backend is running.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>

      <form onSubmit={handleSignup}>
        <input
          className="form-control mb-3"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;