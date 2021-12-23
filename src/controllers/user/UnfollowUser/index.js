const User = require('../../../models/user/index')
const { validationResult } = require('express-validator')
const { verifyToken } = require('../../../services/auth/index')


const UnfollowUser = async (req, res) => {
    const { token, username } = req.body
    const { errors } = validationResult(req)

    try{
        if(!errors.length){
            const ofUser = verifyToken(token)

            if(ofUser){
                const toUser = await User.findOne({username})

                if(toUser && toUser._id != ofUser._id){

                    await User.findByIdAndUpdate(toUser._id, {$pull: {followers: {UserId: ofUser._id}}})
                    await User.findByIdAndUpdate(ofUser._id, {$pull: {followings: {UserId: toUser._id}}})
                    
                    res.json({message: 'ok', status: 200})
                }
                else{
                    res.json({message: 'Usuário não existe', status: 422})
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
        res.json({ message: 'Ocorreu um erro', status: 500 })
    }
}


module.exports = UnfollowUser