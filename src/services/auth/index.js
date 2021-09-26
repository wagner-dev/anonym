const jwt = require('jsonwebtoken')
const keys = require('../../keys/index')
module.exports = {
    verifyToken( token ){

        if(token) return jwt.verify(token, keys.jwt ,(err, result) => err ? false : result)
        else return false

    }
}