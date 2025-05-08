const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Item', itemSchema);
