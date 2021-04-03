const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    addresses:[{
        type: Schema.Types.ObjectId,
        ref: 'address'
    }],
    carts:[{
        type: Schema.Types.ObjectId,
        ref: 'cart'
    }],
    orders:[{
        type: Schema.Types.ObjectId,
        ref: 'order'
    }]
})

module.exports = mongoose.model('user', userSchema)