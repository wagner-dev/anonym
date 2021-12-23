const Talk = require('../../../models/talk/index')
const { verifyToken } = require('../../../services/auth/index')

const GetAllTalk = async (req, res) => {
    const { token } = req.params
    const page = req.query.limit

    try{

        if(token && page){
            const ofUser = verifyToken(token)
            if(ofUser){
                const limit = Number.parseInt(page, 10)
                const talksCount = await Talk.find({toUserId: ofUser._id, response: {$size: 0}}).countDocuments()
                const talks = await Talk.find({toUserId: ofUser._id, response: {$size: 0}}, {body: 1, createdAt: 1})
                                        .limit(15 * limit)
                                        .sort({_id: -1})
                await Talk.updateMany({toUserId: ofUser._id, response: {$size: 0}, iSeenWarning: false}, {$set: {iSeenWarning: true}})
                
                res.json({status: 200, message: 'ok',talks, talksCount})
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
        res.json({ message: 'Ocorreu um erro', status: 500 })
    }
}


module.exports = GetAllTalk