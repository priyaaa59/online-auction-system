// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Optional styling file

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch products from backend
    axios.get('http://localhost:5002/api/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching products');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="App">
      <h1>Online Auction</h1>
      <h2>Products for Auction</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
