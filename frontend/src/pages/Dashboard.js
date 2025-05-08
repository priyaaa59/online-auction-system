import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGavel, FaUser, FaShoppingCart, FaSignOutAlt, FaList } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Check for token instead of user
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token instead of user
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col p-5">
        <h2 className="text-2xl font-bold mb-6">Auction Hub</h2>
        <ul className="space-y-4">
          <li onClick={() => navigate("/auctions")} className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <FaGavel /> Live Auctions
          </li>
          <li onClick={() => navigate("/bids")} className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <FaShoppingCart /> My Bids
          </li>
          <li onClick={() => navigate("/sell")} className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <FaList /> Sell Items
          </li>
          <li onClick={() => navigate("/profile")} className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <FaUser /> Profile
          </li>
          <li onClick={handleLogout} className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <FaSignOutAlt /> Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold">Welcome to Your Dashboard</h2>
          <p className="text-gray-600">Here you can manage your auctions, bids, and purchases.</p>
        </div>

        {/* Auction Listings Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow-md rounded-lg cursor-pointer" onClick={() => navigate("/auctions")}>
            <h3 className="text-lg font-bold">Live Auctions</h3>
            <p className="text-gray-600">Check out ongoing auctions and place your bids.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg cursor-pointer" onClick={() => navigate("/bids")}>
            <h3 className="text-lg font-bold">Your Bids</h3>
            <p className="text-gray-600">View the items you have bid on.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg cursor-pointer" onClick={() => navigate("/sell")}>
            <h3 className="text-lg font-bold">Sell an Item</h3>
            <p className="text-gray-600">List your items for auction.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
