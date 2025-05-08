const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    startingPrice: { type: Number, required: true },
    highestBid: { type: Number, default: 0 },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bid' }],  // <-- Add this line
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);
