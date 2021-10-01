const mongoose = require('mongoose')
const User = require('../../models/user/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const keys = require('../../keys/index')
const { verifyToken } = require('../../services/auth/index')
const Talk = require('../../models/talk/index')
const { differenceInDays } = require('date-fns')


module.exports = {
    async indexall(req, res){
        res.json(await User.find({}))
    },
    async AllDataProfile(req, res){
        const { token } = req.params
        const { limit } = req.query

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
    },
    async index(req, res){
        const { token } = req.params

        if(token){
            const user = await verifyToken(token)
            if(user){
                User.findOne({_id: user._id}).then(async ({username, email, link, desc, img_profile}) => {
                    const activity = await User.aggregate([
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
                    if(username){
                        res.json({"user": {
                            username,
                            email,
                            desc,
                            link,
                            img_profile,
                            activity: activity?.length ? activity[0].followers.length : 0,
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
    },
    async create(req, res) {
        const { username, email, password } = req.body
        const { errors } = validationResult(req)
        const errorsUsername = username.match(/[^a-z0-9-_.]/img)

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
    },
    async allUserData(req, res){
        const { username, token } = req.params
        const { limit } = req.query

        if(username, limit){
            const limitFormatted = Number.parseInt(limit, 10)
            const ofUser = token == 'false' ? false : verifyToken(token)
            User.findOne({username}).then(async (user) => {
                if(user){
                    const is_follow_me = ofUser ? await User.findOne({_id: user._id, 'followings.UserId': ofUser._id}) : false
                    const i_follow = ofUser ? await User.findOne({_id: user._id, 'followers.UserId': ofUser._id}) : false
                    const talksCount = await Talk.find({toUserId: user._id, response: {$size: 1}}, {_id: 0}).countDocuments()
                    const talks = await Talk.find({toUserId: user._id, response: {$size: 1}},
                                            {ofUserId: 0, 'response._id': 0, 'response.updatedAt': 0, createdAt: 0,updatedAt: 0})
                                            .populate('toUserId', {username: 1, _id:0})
                                            .limit( 15 * limitFormatted)
                                            .sort({'response._id': -1})
                    res.json({"user": {
                        followers: user.followers.length,
                        followings: user.followings.length,
                        talks: talks,
                        username: user.username, 
                        desc: user.desc, 
                        link: user.link,
                        talksCount,
                        i_follow_back: is_follow_me && !i_follow ? false : null,
                        i_follow: (i_follow ? true : false),
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
    },
    async follow(req, res) {
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
    },
    async unfollow(req, res){
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

            }
        }
        catch{

        }
    },
    async timeline(req, res) {
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

    },
    async search(req, res) {
        const quest = req.query.q
        try{
            if(quest){
                const search = await User.find({username: {$regex: quest}}, {_id: 0,img_profile: 1, username: 1, desc: 1, is_verified: 1, followers: 1})
                // ordenar
                search.sort((a, b) => b.followers.length - a.followers.length)
                // retirar ids dos users
                search.map(e => e.followers = undefined)
                res.json({message: 'ok', result: search, status: 200})
            }
            else{
                res.json({message: 'Busca inválida', status: 401})
            }
        }
        catch{
            res.json({message: 'Ocorreu um erro', status: 500})
        }
    },
    async updateAccount(req, res){
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
                            const query = {_id: user._id}
                            userBefore.username != username && await User.findByIdAndUpdate(query, {$set: {username}})
                            userBefore.email != email && await User.findByIdAndUpdate(query, {$set: {email}})
                            userBefore.desc != desc && await User.findByIdAndUpdate(query, {$set: {desc}})
                            userBefore?.link != link && await User.findByIdAndUpdate(query, {$set: {link}})
                            res.json({message: 'Perfil atualizado', status: 200})
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

}