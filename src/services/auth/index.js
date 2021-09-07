const jwt = require('jsonwebtoken')
const keys = require('../../keys/index')
module.exports = {
    verifyToken( token ){
        if(token){
            return jwt.verify(token, keys.jwt ,(err, result) => {
                if(err){
                    return false
                }
                else{
                    return result
                }
            })
        }
        else{
            return false
        }
    }
}