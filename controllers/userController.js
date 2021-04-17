const createHttpError = require('http-errors')
const user = require('../models/user')
const address = require('../models/address')

exports.user_create_post = (req, res, next) => {
    const data = req.body
    console.log('API: USER_CREATE_POST')
    console.log(data)
    const newUser = new user({
        username: data.username,
        password: data.password
    })
    newUser.save(function (err) {
        if (err) {
            const error = createHttpError(503, 'ISE')
            next(error)
        }
        res.status(200).send(data)
    })
}

exports.user_login_post = (req, res, next) => {
    const data = req.body
    console.log('API: USER_LOGIN_POST')
    console.log(data)
    user.findOne(data, function (err, found_user) {
        if (found_user) {
            res.status(200).send(found_user)
        } else {
            console.log('Incorrect')
            const error = createHttpError(403, 'Incorrect')
            next(error)
        }
    })
}

exports.user_logout_post = (req, res, next) => {
    const data = req.body
    console.log('API: USER_LOGOUT_POST')
    console.log(data)
    user.findByIdAndUpdate(data._id, data, {}, function (err, new_user) {
        if (err) {
            const error = createHttpError(503, 'ISE')
            next(error)
        }
        console.log(new_user)
        res.status(200).send('User logged out')
    })
}

exports.user_change_username_post = (req, res, next) => {
    const data = req.body
    console.log('API: USER_CHANGE_USERNAME_POST')
    console.log(data)
    user.findByIdAndUpdate(data._id, data, {}, function (err, new_user) {
        if (err) {
            const error = createHttpError(503, 'ISE')
            next(error)
        }
        console.log(new_user)
        res.status(200).send(data)
    })
}

exports.user_change_password_post = (req, res, next) => {
    const data = req.body
    console.log('API: USER_CHANGE_PASSWORD_POST')
    console.log(data)
    user.findByIdAndUpdate(data._id, data, {}, function (err, new_user) {
        if (err) {
            const error = createHttpError(503, 'ISE')
            next(error)
        }
        console.log(new_user)
        res.status(200).send(data)
    })
}

exports.user_add_address_post = (req, res, next) => {
    const data = req.body
    console.log('API: USER_ADD_ADDRESS')
    console.log(data)
    const newAddress = new address(data.newAddress)
    newAddress.save((err) => {
        if (err) {
            const error = createHttpError(503, 'ISE')
            next(error)
        }
    })
    user.findById(data.userID, (err, oldUser) => {
        console.log(oldUser)
        oldUser.addresses.push(newAddress._id)
        user.findByIdAndUpdate(data.userID, oldUser, {}, function (err, new_user) {
            if (err) {
                const error = createHttpError(503, 'ISE')
                next(error)
            }
            res.status(200).send('success')
        })
    })
}

exports.user_addresses_get = (req, res, next) => {
    const userID = req.body
    console.log('API: USER_ADDRESSES_GET')
    console.log(userID)
    user.findById(userID).populate('addresses').exec((err, found_user) => {
        if (err) {
            const error = createHttpError(503, 'ISE')
            next(error)
        }
        console.log(found_user)
        res.status(200).send(found_user)
    })
}