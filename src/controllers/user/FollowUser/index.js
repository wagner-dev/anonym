const User = require('../../../models/user/index')
const { validationResult } = require('express-validator')
const { verifyToken } = require('../../../services/auth/index')

const FollowUser = async (req, res) => {
    const { token, username } = req.body
    const { errors } = validationResult(req)
    
    try{
        if(!errors.length){
            const user_id = verifyToken(token)
            if(user_id){
                const user_exist = await User.findOne({_id: user_id._id})
                if(user_exist){
                    const toUser = await User.findOne({username})
                    if(toUser && toUser._id != user_id._id){
                        const isFollow = await User.findOne({_id: toUser._id, 'followers.UserId': user_id._id})
                        if(isFollow){
                            res.json({status: 422, message: 'Você já segue'})
                        }
                        else{
                            await User.findByIdAndUpdate(toUser._id, {$push: {followers: {UserId: user_id._id}}})
                            await User.findByIdAndUpdate(user_id, {$push: {followings: {UserId: toUser._id}}})
                            
                            res.json({status: 200, message: 'ok'})
                        }
                    }
                    else{
                        res.json({status: 401, message: 'Conta não existe'})
                    }
                }
                else{
                    res.json({status: 401, message: 'Conta não existe'})
                }
            }
            else{
                res.json({status: 401, message: 'Não autorizado'})
            }
        }   
        else{
            res.json({status: 422, message: 'Dados inválidos'})
        }
    }
    catch{
        res.json({status: 500, message: 'Ocorreu um erro'})
    }
}


module.exports = FollowUser