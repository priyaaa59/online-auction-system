import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ email, password }));
    navigate("/login");
  };

  return (
    <div 
      className="w-full h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url('/bid.png')", // SAME AS LOGIN PAGE
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded"
              value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-2 border rounded"
              value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input type="password" className="w-full p-2 border rounded"
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-800">
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-600">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup