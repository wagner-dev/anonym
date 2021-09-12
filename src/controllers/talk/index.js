const User = require('../../models/user/index')
const Talk = require('../../models/talk/index')
const { validationResult } = require('express-validator')

module.exports = {
    async create(req, res) {
        const { username, body } = req.body
        const { errors } = validationResult(req)

        try{
            if(!errors.length){
                const user = await User.findOne({username})
                if(user){
                    const sendMsg = await Talk.create({toUserId: user._id, body})

                    if(sendMsg){
                        res.json({status: 200, message: 'Mensagem enviada com sucesso'})
                    }
                    else{
                        res.json({status: 200, message: 'Ocorreu um erro ao enviar a mensagem'})
                    }
                }
                else{
                    res.json({status: 404, message: 'Usuário não existe'})
                }
            }
            else{
                res.json({status: 422, message: 'campos inválidos'})
            }
        }
        catch{
            res.json({status: 500, message: 'Ocorreu um erro'})
        }
    }
}