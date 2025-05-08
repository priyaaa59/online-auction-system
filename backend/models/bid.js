const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    bidder: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // <- Should match "bidder"
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }  // <- Should match "product"
}, { timestamps: true });

module.exports = mongoose.model('Bid', bidSchema);
