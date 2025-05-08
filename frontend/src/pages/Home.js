import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="w-full h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/mu.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      {/* Overlay Content */}
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg text-center w-3/4 md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-800">
          Online Auction System for Students
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Buy and sell personal items easily with your fellow students!
        </p>

        {/* Login & Signup Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button 
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800"
          >
            Login
          </button>
          <button 
            onClick={() => navigate("/signup")}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-800"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
