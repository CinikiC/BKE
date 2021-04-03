const mongoose = require('mongoose');

const Schema = mongoose.Schema

const cartSchema = new Schema({
    product: [{
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true
    }],
    number: {
        type: Number,
        required: true,
    },
    address: [{
        type: Schema.Types.ObjectId,
        ref: 'address',
        required: true
    }]
})

module.exports = mongoose.model('cart', cartSchema)