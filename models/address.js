const mongoose = require('mongoose');

const Schema = mongoose.Schema

const addressSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('address', addressSchema)