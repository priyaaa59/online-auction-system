import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
  
    console.log("Attempting login with:", email, password);
  
    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.userId)); // Store user data
        console.log("Login successful, redirecting...");
        navigate("/dashboard");
        window.location.reload();
      } else {
        setError(data.message || "Invalid email or password");
        console.log("Login failed:", data.message);
      }
    } catch (err) {
      setError("Server error. Please try again later.");
      console.log("Server error:", err);
    }
  };

  return (
    <div 
      className="w-full h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/bid.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? <a href="/signup" className="text-blue-600">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
