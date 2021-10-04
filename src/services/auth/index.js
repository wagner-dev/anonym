require('dotenv').config()
const jwt = require('jsonwebtoken')
const keys = require('../../keys/index')
module.exports = {
    verifyToken( token ){
        const SECRET = process.env.SECRET_JWT

        if(token) return jwt.verify(token, SECRET ,(err, result) => err ? false : result)
        else return false

    }
}