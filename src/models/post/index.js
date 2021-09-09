const mongoose = require('mongoose')


const LikesSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    isNotified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const SubCommentsSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },
    body: {
        type: String,
        min: 1,
        max: 120,
        required: true
    }
})

const CommentsSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    body: {
        type: String,
        min: 1,
        max: 120,
        required: true
    },
    subComments: [ SubCommentsSchema ]
})

const PostSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    body: {
        type: String,
        min: 1,
        max: 120,
        required: true
    },
    likes: [ LikesSchema ],
    comments: [ CommentsSchema ],
    saved: {
        type: Array,
        default: []
    },
}, {
    timestamps: true
})

const Post = mongoose.model('post', PostSchema)

module.exports = Post