const User = require('../../models/user/index')
const { verifyToken } = require('../../services/auth/index')
const Talk = require('../../models/talk/index')
const { getTime} = require('date-fns')

const GetNotifications = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]
    const limit = Number.parseInt(req.query.limit, 10)

    try{
        if(token){
            const user = verifyToken(token)
            if(user){
                const LIMIT_PAGE = 15
                await Talk.updateMany({toUserId: user._id, response: {$size: 0}, iSeenWarning: false}, {$set: {iSeenWarning: true}})
                await User.updateMany({_id: user._id, 'followers.iSeenWarning': false}, {$set: {'followers.$[].iSeenWarning': true}})
                
                const countUser = await User.findOne({_id: user._id}, {_id: 0, 'followers.UserId': 1, 'followers.createdAt': 1}).countDocuments()
                const countTalk = await Talk.find({toUserId: user._id}, {createdAt: 1, body: 1,}).countDocuments()

                const activityUser = await User.findOne({_id: user._id}, {_id: 0, 'followers.UserId': 1, 'followers.createdAt': 1})
                                                .populate("followers.UserId", {_id: 0,username: 1, desc: 1, img_profile: 1, createdAt: 1})
                                                .limit(limit * LIMIT_PAGE)
                const activityTalk = await Talk.find({toUserId: user._id}, {createdAt: 1, body: 1,})
                                                .limit(limit * LIMIT_PAGE)
                                                .sort({_id: -1})
                const activity = [...activityUser.followers, ...activityTalk]
                activity.sort((a, b) => getTime(b.createdAt) - getTime(a.createdAt))
                res.json({message: 'ok', status: 200, body: activity, meta: {total: countTalk + countUser}})
            }
            else{
                res.json({message: 'Não autorizado', status: 401})
            }
        }
        else{
            res.json({message: 'Não autorizado', status: 401})
        }
    }
    catch{
        res.json({message: 'Ocorreu um erro', status: 500})
    }
}


module.exports = GetNotifications