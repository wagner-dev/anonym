const Talk = require('../../../models/talk/index')
const { verifyToken } = require('../../../services/auth/index')


const GetOneTalk = async (req, res) => {
    const { token, _id} = req.params

    try{
        if(token && _id){
            const ofUser = verifyToken(token)
            if(ofUser){
                const talk = await Talk.findOne({_id, toUserId: ofUser._id, response: {$size: 0}},{body: 1, createdAt: 1})
                if(talk){
                    res.json({message: 'ok', status: 200, talk})
                }
                else{
                    res.json({message: 'Não encontrado', status: 404})
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


module.exports = GetOneTalk