require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = {
    verifyToken( token ){
        const SECRET = process.env.SECRET_JWT

        if(token) return jwt.verify(token, SECRET ,(err, result) => err ? false : result)
        else return false

    }
}