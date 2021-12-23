const User = require('../../models/user/index')
const { verifyToken } = require('../../services/auth/index')
const Talk = require('../../models/talk/index')


const GetTimeline = async (req, res) => {
    const { token } = req.params
    const { limit } = req.query

    try{
        if(token){
            const limitFormatted = Number.parseInt(limit, 10)
            const ofUser = verifyToken(token)
            if(ofUser){
                const user = await User.findOne({_id: ofUser._id}, {'followings.UserId': 1})
                const followings = user.followings.map(item => item.UserId)                       
                const talksCount = await Talk.find({toUserId: {$in: followings}, response: {$size: 1}}).countDocuments()
                const talks = await Talk.find({toUserId: {$in: followings}, response: {$size: 1}},
                                              {_id: 0, createdAt: 0, updatedAt: 0, 'response._id' : 0, 'response.updatedAt': 0})
                                        .populate('toUserId', {username: 1, _id: 0})
                                        .limit( 15 * limitFormatted )
                                        .sort({'response.createdAt': -1})
                res.json({status: 200,message: 'ok', talks, talksCount})
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


module.exports = GetTimeline