const User = require('../../../models/user/index')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

const CreateUser = async (req, res) => {
    const { username, email, password } = req.body
    const { errors } = validationResult(req)
    const errorsUsername = username.match(/[^a-z0-9-_.]/img)

    try{
        if(!errors.length && !errorsUsername){
            const blockedNames = [ 'login', 'welcome', 'create-account', 'profile', 'search']
            if(blockedNames.includes(username)){
                res.json({message: 'Nome de usuário não permitido!', status: 401, create: false})
            }
            else{
                const hasUser = await User.findOne({username})
                if(hasUser){
                    res.json({message: 'Usuário já existente', status: 422, create: false})
                }
                else{
                    const hasEmail = await User.findOne({email})
                    if(hasEmail){
                        res.json({message: 'Email já existente', status: 422, create: false})
                    }
                    else{
                        await bcrypt.hash(password, 10, async (err, result) => {
                            if(err){
                                res.json({message: 'Ocorreu um erro ao criptografar a senha', status: 422, create: false})
                            }
                            else{
                                await User.create({username, email, password: result})
                                res.json({message: 'Conta criada com sucesso', status: 200, create: true})
                            }
                        })
                    }
                }
            }
        }
        else{
            res.json({message: 'Campo(s) inválido(s)', status: 422, create: false})
        }
    }
    catch{
        res.json({ message: 'Ocorreu um erro', status: 500 })
    }
}


module.exports = CreateUser