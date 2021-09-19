const router = require('express').Router()
const UserController = require('../controllers/user/index')
const TalkController = require('../controllers/talk/index')
const { body } = require('express-validator')

router.get('/user/index', UserController.indexall)

router.get('/user/:username/:token/data-user', UserController.allUserData)

router.get('/user/:token/index', UserController.index)

router.get('/user/:token/indexfull', UserController.AllDataProfile)

router.post('/user/check', [
    body("username").isLength({min: 2, max: 64}),
    body("password").isLength({min: 8, max: 64}),
    body("email").isEmail().isLength({min: 2, max: 64}),
    // body("name").isLength({min: 2, max: 64}),
],
 UserController.check)
 
 router.post('/user/create', [
    body("username").isLength({min: 2, max: 64}),
    body("email").isEmail().isLength({min: 2, max: 64}),
    body("password").isLength({min: 8, max: 64}),
    // body("name").isLength({min: 2, max: 64}),
],
 UserController.create)

router.post('/user/follow', [
    body("username").notEmpty(),
    body("token").notEmpty()
 ],
UserController.follow)

router.post('/user/unfollow', [
    body("username").notEmpty(),
    body("token").notEmpty()
 ],
 UserController.unfollow)


//  talks
router.get('/talk/:token/index', TalkController.index)

router.get('/talk/:token/:_id/indexone', TalkController.indexOne)

router.post('/talk/create', [
    body('username').notEmpty(),
    body('body').isLength({min: 1, max: 420})
] ,TalkController.create)

router.post('/talk/response/create', [
    body('token').notEmpty(),
    body('_id').notEmpty(),
    body('body').isLength({min: 1, max: 420})
], TalkController.CreateResponse)


// timeline

router.get('/user/:token/timeline', UserController.timeline)

module.exports = router