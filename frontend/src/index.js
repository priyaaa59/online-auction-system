// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Styling for the React app
import App from './App'; // Main React component

// Render the React app to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
