const User = require('../../../models/user/index')

const SearchUser = async (req, res) => {
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
        res.json({ message: 'Ocorreu um erro', status: 500 })
    }
}


module.exports = SearchUser