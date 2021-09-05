const router = require('express').Router()
const UserController = require('../controllers/user/index')
const { body } = require('express-validator')

router.get('/user/index', UserController.index)

router.post('/user/check', [
    body("username").isLength({min: 2, max: 64}),
    body("email").isEmail().isLength({min: 2, max: 64}),
    body("password").isLength({min: 8, max: 64}),
],
 UserController.check)
 
 router.post('/user/create', [
    body("username").isLength({min: 2, max: 64}),
    body("email").isEmail().isLength({min: 2, max: 64}),
    body("password").isLength({min: 8, max: 64}),
],
 UserController.create)
module.exports = router