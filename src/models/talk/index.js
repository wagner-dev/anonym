const mongoose = require('mongoose')

const ResponseSchema = mongoose.Schema({
    body: {
        type: String,
        max: 120,
        required: true
    }
}, {
    timestamps: true
})

const TalkSchema = mongoose.Schema({
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    ofUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    body: {
        type: String,
        max: 120,
        required: true
    },
    response: [ ResponseSchema ]
}, {
    timestamps: true
})

const Talk = mongoose.model('talk', TalkSchema)

module.exports = Talk