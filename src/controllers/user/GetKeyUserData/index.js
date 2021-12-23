const mongoose = require('mongoose')
const User = require('../../../models/user/index')
const { verifyToken } = require('../../../services/auth/index')
const Talk = require('../../../models/talk/index')

const GetKeyUserData = async (req, res) => {
    const { token } = req.params
    try{
        if(token){
            const user = await verifyToken(token)
            if(user){
                User.findOne({_id: user._id}).then(async ({username, email, link, desc, img_profile}) => {
                    const activityUser = await User.aggregate([
                        {$match: {_id: mongoose.Types.ObjectId(user._id), 'followers.iSeenWarning': false}},
                        {$project: {
                            followers: {
                                $filter: {
                                    input: "$followers",
                                    as: "item",
                                    cond: {
                                        $eq: ['$$item.iSeenWarning', false]
                                    }
                                }
                            }
                        }},                        
                    ])
                    const activityTalk = await Talk.find({toUserId: user._id, iSeenWarning: false})
                    const activity = (activityUser[0]?.followers?.length || 0) + activityTalk.length
                    if(username){
                        res.json({"user": {
                            username,
                            email,
                            desc,
                            link,
                            img_profile,
                            activity: activity,
                        }})
                    }
                    else{
                        res.json({message: "ok", status: 401, user:{ isAnonymous: true }})
                    }
                }).catch(() => {
                    res.json({message: "ok", status: 401, user:{ isAnonymous: true }})
                })
            }
            else{
                res.json({message: "ok", status: 401, user:{ isAnonymous: true }})
            }
        }
        else{
            res.json({message: "ok", status: 401, user:{ isAnonymous: true }})
        }
    }
    catch{
        res.json({ message: 'Ocorreu um erro', status: 500 })
    }
}


module.exports = GetKeyUserData