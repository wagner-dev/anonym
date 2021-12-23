const router = require('express').Router()
const { body } = require('express-validator')

const ControllerGetUserProfileData = require('../controllers/user/GetUserProfileData/index') 
const ControllerGetKeyUserData = require('../controllers/user/GetKeyUserData/index')
const ControllerGetAllUserData = require('../controllers/user/GetAllUserData/index')
const ControllerSearchUser = require('../controllers/user/SearchUser/index')
const ControllerUpdateUser = require('../controllers/user/UpdateUser/index')
const ControllerGetNotifications = require('../controllers/GetNotifications/index')
const ControllerCheckUserLogin = require('../controllers/user/CheckUserLogin/index')
const ControllerCreateUser = require('../controllers/user/CreateUser/index')
const ControllerFollowUser = require('../controllers/user/FollowUser/index')
const ControllerUnfollowUser = require('../controllers/user/UnfollowUser/index')
const ControllerGetTimeline = require('../controllers/GetTimeline/index')

const ControllerGetAllTalk = require('../controllers/talk/GetAllTalk/index')
const ControllerGetOneTalk = require('../controllers/talk/GetOneTalk/index')
const ControllerCreateTalk = require('../controllers/talk/CreateTalk/index')
const ControllerCreateTalkResponse = require('../controllers/talk/CreateTalkResponse/index')

// timeline
router.get('/user/:token/timeline', ControllerGetTimeline)
//  user
router.get('/user/:username/:token/data-user', ControllerGetUserProfileData)
router.get('/user/:token/index', ControllerGetKeyUserData)
router.get('/user/:token/indexfull', ControllerGetAllUserData)
router.get('/user/search', ControllerSearchUser)
router.get('/user/notifications', ControllerGetNotifications)

router.put('/user/update-account',[
    body("username").isLength({min: 2, max: 64}),
    body("email").isEmail().isLength({min: 2, max: 64}),
    body('desc').isLength({min: 1,max: 140}),
], ControllerUpdateUser)

router.post('/user/check', [
    body("username").isLength({min: 2, max: 64}),
    body("password").isLength({min: 8, max: 64}),
    body("email").isEmail().isLength({min: 2, max: 64}),
],
ControllerCheckUserLogin)

router.post('/user/create', [
   body("username").isLength({min: 2, max: 64}),
   body("email").isEmail().isLength({min: 2, max: 64}),
   body("password").isLength({min: 8, max: 64}),
],
ControllerCreateUser)

router.post('/user/follow', [
    body("username").notEmpty(),
    body("token").notEmpty()
 ],
ControllerFollowUser)

router.post('/user/unfollow', [
    body("username").notEmpty(),
    body("token").notEmpty()
 ],
ControllerUnfollowUser)

//  talks
router.get('/talk/:token/index', ControllerGetAllTalk)
router.get('/talk/:token/:_id/indexone', ControllerGetOneTalk)

router.post('/talk/create', [
    body('username').notEmpty(),
    body('body').isLength({min: 1, max: 420})
], ControllerCreateTalk)

router.post('/talk/response/create', [
    body('token').notEmpty(),
    body('_id').notEmpty(),
    body('body').isLength({min: 1, max: 420})
], ControllerCreateTalkResponse)

module.exports = router