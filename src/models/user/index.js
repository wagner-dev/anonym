const mongoose = require('mongoose')

const followersSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    isWarned: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

const followingsSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    isWarned: {
        type: Boolean,
        default: false
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
    desc: {
        type: String,
        max: 80,
        default: "Oi! Estou usando o Anonym." 
    },
    followers: [ followersSchema ],
    followings: [ followingsSchema ],
    
    isAdmin: {
        type: Boolean,
        default: false
    },
    isPrivate: {
        type: Boolean,
        default: false
    },
    link_instagram: {
        type: String,
    },
    link_yt: {
        type: String,
    },
},{
    timestamps: true
})
const User = mongoose.model('user', UserSchema)

module.exports = User