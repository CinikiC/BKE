const mongoose = require('mongoose');

const Schema = mongoose.Schema

const orderSchema = new Schema({
    cart: [{
        type: Schema.Types.ObjectId,
        ref: 'cart',
        required: true
    }],
    address: {
        type: Schema.Types.ObjectId,
        ref: 'address',
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Delevering', 'Returned', 'Cancelled'],
        default: 'Delevering'
    }
})

module.exports = mongoose.model('order', orderSchema)