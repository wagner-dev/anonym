const mongoose = require('mongoose')

const SubCommentsSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    body: {
        type: String,
        min: 1,
        max: 120,
        required: true
    }
})

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

const CommentsSchema = mongoose.Schema({
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