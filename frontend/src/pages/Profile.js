import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    idNumber: "SE22UARI123",
    phoneNumber: "9876543210",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          ) : (
            <p className="p-2 bg-gray-100 rounded">{userData.name}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">ID Number</label>
          {isEditing ? (
            <input
              type="text"
              name="idNumber"
              value={userData.idNumber}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          ) : (
            <p className="p-2 bg-gray-100 rounded">{userData.idNumber}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Phone Number</label>
          {isEditing ? (
            <input
              type="text"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          ) : (
            <p className="p-2 bg-gray-100 rounded">{userData.phoneNumber}</p>
          )}
        </div>

        <div className="flex gap-4">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">
                Save
              </button>
              <button onClick={handleCancel} className="bg-gray-400 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </>
          ) : (
            <button onClick={() => setIsEditing(true)} className="bg-green-600 text-white px-4 py-2 rounded">
              Edit Profile
            </button>
          )}
          <button onClick={() => navigate("/dashboard")} className="bg-red-600 text-white px-4 py-2 rounded">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
