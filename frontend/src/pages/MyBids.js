import React, { useEffect, useState } from "react";

const MyBids = () => {
  const [bids, setBids] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5001/api/bids", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch bids");
        }

        const data = await response.json();
        setBids(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBids();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Bids</h2>

      {error && <p className="text-red-500">{error}</p>}

      {bids.length === 0 ? (
        <p className="text-gray-600">You haven't placed any bids yet.</p>
      ) : (
        <div className="space-y-4">
          {bids.map((bid) => (
            <div key={bid.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">{bid.itemName}</h3>
              <p className="text-gray-600">Your Bid: ${bid.amount}</p>
              <p className="text-gray-500">Status: {bid.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBids;
