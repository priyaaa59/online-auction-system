import React, { useState } from "react";
import axios from "axios";

const Sell = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("image", formData.image);

    try {
      await axios.post("http://localhost:5001/api/sell", data);
      alert("Item listed for auction!");
      setFormData({ name: "", description: "", price: "", image: null });
    } catch (error) {
      console.error("Error listing item:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Sell an Item</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-lg space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Item Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Starting Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border p-2 w-full rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
          List Item
        </button>
      </form>
    </div>
  );
};

export default Sell;
