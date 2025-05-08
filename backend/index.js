const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001;

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Backend is running...');
});

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

const bidRoutes = require('./routes/bidRoutes');
app.use('/api/bids', bidRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
