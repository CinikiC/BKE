const mongoose = require('mongoose');

const Schema = mongoose.Schema

const orderSchema = new Schema({
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
    }],
    status: {
        type: String,
        required: true,
        enum: ['Delevering', 'Returned', 'Cancelled'],
        default: 'Delevering'
    }
})

module.exports = mongoose.model('order', orderSchema)