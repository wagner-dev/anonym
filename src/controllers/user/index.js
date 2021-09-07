const User = require('../../models/user/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const keys = require('../../keys/index')
const { verifyToken } = require('../../services/auth/index')
const Post = require('../../models/post/index')

module.exports = {
    async indexall(req, res){
        res.json(await User.find({}))
    },
    async index(req, res){
        const token = req.params.token
        const errors = validationResult(req)
        if(!errors.length){
            const user = await verifyToken(token)
            if(user){
                User.findOne({_id: user._id}).then(({username, email, followings, followers, isAdmin, desc}) => {
                    if(username){
                        res.json({
                            username,
                            email,
                            followings: followings.length,
                            followers: followers.length,
                            isAdmin, desc
                        })
                    }
                    else{
                        res.json({message: "ok", status: 401,
                        user:{
                            isAnonymous: true
                        }})
                    }
                }).catch(() => {
                    res.json({message: "ok", status: 401,
                    user:{
                        isAnonymous: true
                    }})
                })
            }
            else{
                res.json({message: "ok", status: 401,
                user:{
                    isAnonymous: true
                }})
            }
        }
        else{
            res.json({message: "ok", status: 401,
            user:{
                isAnonymous: true
            }})
        }
    },
    async create(req, res) {
        const { username, email, password } = req.body
        const { errors } = validationResult(req)
        const errorsUsername = username.match(/[^a-z0-9-_.]/img)

        if(!errors.length && !errorsUsername){
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
                    const passCript = await bcrypt.hash(password, 10, async (err, result) => {
                        if(err){
                            res.json({message: 'Ocorreu um erro ao criptografar a senha', status: 422, create: false})
                        }
                        else{
                            const newUser = await User.create({username, email, password: result})
                            res.json({message: 'Conta criada com sucesso', status: 200, create: true})
                        }
                    })
                }
            }
        }
        else{
            res.json({message: 'Campo(s) inválido(s)', status: 422, create: false})
        }


    },
    async check(req, res) {
        const { username, email, password } = req.body

        const { errors } = validationResult(req)
        const errorsUsername = username.match(/[^a-z0-9-_.]/img)
        
        if(!errors.length){
            if(!errorsUsername){
                const account = await User.findOne({username})
                if(account){
                    if(account.email === email){
                        bcrypt.compare(password,account.password, (err, result) => {
                            if(err){
                                res.json({message: "Ocorreu um erro", status: 500, login: false})
                            }
                            else{
                                if(result){
                                    const payload = {_id: account._id}
                                    const token = jwt.sign( payload, keys.jwt, {expiresIn: "28d"})
                                    res.json({ message: "Logado com sucesso.", status: 200, login: true, token})
                                }
                                else{
                                    res.json({message: "Senha incorreta", status: 401, login: false})
                                }
                            }
                        })
                    }
                    else{
                        res.json({message: "Email incorreto", status: 401, login: false})
                    }
                }
                else{
                    res.json({message: "Usuário não existe", status: 401, login: false})
                } 
            }
            else{
                res.json({message: "Seu nome não deve ter caracteres especiais", status: 422, login: false})
            }
        }
        else{
            res.json({message: "Campo(s) inválido(s)", status: 422, login: false})
        }
    }
}