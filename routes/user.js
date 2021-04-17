var express = require('express');
var router = express.Router();

const user_controller = require('../controllers/userController')

router.post('/register', user_controller.user_create_post)
router.post('/login', user_controller.user_login_post)
router.post('', user_controller.user_logout_post)
router.post('/editusername', user_controller.user_change_username_post)
router.post('/editpassword', user_controller.user_change_password_post)
router.post('/addaddress', user_controller.user_add_address_post)
router.post('/addresses', user_controller.user_addresses_get)

module.exports = router

