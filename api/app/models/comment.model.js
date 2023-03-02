const {Schema, model} = require('mongoose');
const crypto = require("crypto");

const CommentSchema = new Schema({
    _id: {type: String, default: () => crypto.randomUUID(), unique: true},
    user: {
        type: String,
        ref: 'User',
    },
    nickname: {
        type: String
    },
    news: {
        type: String,
        ref: 'News',
    },
    content: {type: String},
    publishedAt: {type: Number}
})

module.exports = model('Comment', CommentSchema);
