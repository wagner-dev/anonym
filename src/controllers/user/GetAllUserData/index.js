const User = require('../../../models/user/index')
const { verifyToken } = require('../../../services/auth/index')
const Talk = require('../../../models/talk/index')


const GetAllUserData = async (req, res) => {
    const { token } = req.params
    const { limit } = req.query

    try{
        if(token, limit){
            const user = await verifyToken(token)
            if(user){
                const limitFormatted = Number.parseInt(limit, 10)
                User.findOne({_id: user._id}).then(async (user) => {
                    if(user){
                        const { username, email, isAdmin, desc, followings, followers } = user
                        const talksCount = await Talk.find({toUserId: user._id, response: {$size: 1}}, {_id: 1}).countDocuments()
                        const talks = await Talk.find({toUserId: user._id, response: {$size: 1}},
                                                {ofUserId: 0, _id: 0, 'response.updatedAt': 0,updatedAt: 0, createdAt: 0})
                                                .populate('toUserId', {username: 1, _id:0})
                                                .limit( 15 * limitFormatted)
                                                .sort({'response._id': -1})
                        res.json({"user": {
                            followers :followers.length,
                            followings: followings.length,
                            talks: talks,
                            talksCount, username, email, isAdmin, desc,
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
        else{
            res.json({message: "ok", status: 401})
        }
    }
    catch{
        res.json({ message: 'Ocorreu um erro', status: 500 })
    }
}


module.exports = GetAllUserData