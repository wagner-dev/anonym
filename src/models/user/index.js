const mongoose = require('mongoose')

const followersSchema = mongoose.Schema({
    UserId: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const UserSchema = mongoose.Schema({
    username: {
        required: true,
        type: String,
        index: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    email: {
        required: true,
        type: String,
        index: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        required: true,
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    desc: {
        type: String,
        max: 80,
        default: "Oi! Estou usando o Anonym." 
    },
    followers: [ followersSchema ],
    followings: {
        type: Array,
        default: []
    }
},{
    timestamps: true
})
const User = mongoose.model('user', UserSchema)

module.exports = User