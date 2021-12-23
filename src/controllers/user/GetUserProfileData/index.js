const User = require('../../../models/user/index')
const { verifyToken } = require('../../../services/auth/index')
const Talk = require('../../../models/talk/index')

const GetUserProfileData = async (req, res) => {
    const { username, token } = req.params
    const { limit } = req.query
    try{
        if(username, limit){
            const limitFormatted = Number.parseInt(limit, 10)
            const ofUser = token == 'false' ? false : verifyToken(token)
            User.findOne({username}).then(async (user) => {
                if(user){
                    const is_follow_me = ofUser ? await User.findOne({_id: user._id, 'followings.UserId': ofUser._id}) : false
                    const i_follow = ofUser ? await User.findOne({_id: user._id, 'followers.UserId': ofUser._id}) : false
                    const talksCount = await Talk.find({toUserId: user._id, response: {$size: 1}}, {_id: 0}).countDocuments()
                    const talks = await Talk.find({toUserId: user._id, response: {$size: 1}},
                                            {ofUserId: 0, 'response._id': 0, 'response.updatedAt': 0, createdAt: 0,updatedAt: 0})
                                            .populate('toUserId', {username: 1, _id:0})
                                            .limit( 15 * limitFormatted)
                                            .sort({'response._id': -1})
                    res.json({"user": {
                        followers: user.followers.length,
                        followings: user.followings.length,
                        talks: talks,
                        username: user.username, 
                        desc: user.desc, 
                        link: user.link,
                        talksCount,
                        i_follow_back: is_follow_me && !i_follow ? false : null,
                        i_follow: (i_follow ? true : false),
                    }, status: 200})
                }
                else{
                    res.json({message: "ok", status: 401})
                }
            })
        }
        else{
            res.json({message: "ok", status: 401})
        }
    }
    catch{
        res.json({ message: 'Ocorreu um erro', status: 500 })
    }
} 

module.exports = GetUserProfileData