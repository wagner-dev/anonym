const mongoose = require('mongoose')

const followersSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    iSeenWarning: {
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
    img_profile: {
        type: String,
        max: 240,
        min: 4
    },
    desc: {
        type: String,
        max: 80,
        default: "Oi! Estou usando o Anonym." 
    },
    followers: [ followersSchema ],
    followings: [ followingsSchema ],
    
    link: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    is_verified: {
        type: Boolean,
        default: false
    },
},{
    timestamps: true
})

UserSchema.index({username: 'text'})

const User = mongoose.model('user', UserSchema)

module.exports = User