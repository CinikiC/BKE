const mongoose = require('mongoose');

const Schema = mongoose.Schema

const catalogSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('catalog', catalogSchema)