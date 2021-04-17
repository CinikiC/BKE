const mongoose = require('mongoose');

const Schema = mongoose.Schema

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    catalog: {
        type: Schema.Types.ObjectId,
        ref: 'catalog',
        required: true
    }
})

module.exports = mongoose.model('product', productSchema)