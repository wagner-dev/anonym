const User = require('../../../models/user/index')
const { validationResult } = require('express-validator')
const { verifyToken } = require('../../../services/auth/index')
const { differenceInDays } = require('date-fns')


const UpdateUser = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]
        const { username, email, desc, link} = req.body
        const errorsUsername = username.match(/[^a-z0-9-_.]/img)
        const { errors } = validationResult(req)

        try{
            
            if(!errors.length && token && !errorsUsername){
                const blockedNames = [ 'login', 'welcome', 'create-account', 'profile', 'search']
                if(blockedNames.includes(username)){
                    res.json({message: 'Nome de usuário não permitido!', status: 401})
                }
                else{
                    const user = verifyToken(token)
                    if(user){
                        const LIMIT_TIME = 30 // in days 
                        const userBefore = await User.findOne({_id: user._id}, {username: 1, email: 1, desc: 1, link: 1, updatedAt: 1})
                        const wasRecentlyUpdate = differenceInDays(new Date(), userBefore.updatedAt) < LIMIT_TIME ? true : false
                          if(wasRecentlyUpdate){
                            res.json({message: 'Você atualizou seu perfil nos últimos 30 dias.', status: 405})
                        }
                        else{
                            const existsUserName = await User.findOne({username})
                            if(!existsUserName || existsUserName.username == userBefore.username){
                                const existsEmail = await User.findOne({email})
                                if(!existsEmail || existsEmail.email == userBefore.email){
                                    const query = {_id: user._id}
                                    userBefore.username != username && await User.findByIdAndUpdate(query, {$set: {username}})
                                    userBefore.email != email && await User.findByIdAndUpdate(query, {$set: {email}})
                                    userBefore.desc != desc && await User.findByIdAndUpdate(query, {$set: {desc}})
                                    userBefore?.link != link && await User.findByIdAndUpdate(query, {$set: {link}})
                                    res.json({message: 'Perfil atualizado', status: 200})
                                }
                                else{
                                    res.json({message: 'Email já existente', status: 401})
                                }
                            }
                            else{
                                res.json({message: 'Usuário já existente', status: 401})
                            }
                        }
                        
                    }
                    else{
                        res.json({message: 'Não autorizado', status: 401})
                    }
                }
            }
            else{
                res.json({message: 'Dados inválidos', status: 401})
            }

        }   
        catch{
            res.json({message: 'Ocorreu um erro', status: 500})
        }
}


module.exports = UpdateUser