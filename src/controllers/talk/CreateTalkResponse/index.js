const Talk = require('../../../models/talk/index')
const { validationResult } = require('express-validator')
const { verifyToken } = require('../../../services/auth/index')

const CreateTalkResponse = async (req, res) => {
    const { token, _id, body } = req.body
    const { errors } = validationResult(req)

    try{
        if(!errors.length){
            const ofUser = verifyToken(token)
            if(ofUser){
                const hasResponse = await Talk.findOne({_id, toUserId: ofUser._id, response: {$size: 1}})
                if(hasResponse){
                    res.json({status: 422, message: 'Talk já respondido :('})
                }
                else{
                    const createResponse = await Talk.findOneAndUpdate({_id, toUserId: ofUser._id, response: {$size: 0}}, {$push: {response: {body}}})
                    if(createResponse){
                        res.json({status: 200, message: 'Talk respondido!'})
                    }
                }
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


module.exports = CreateTalkResponse