const {Schema, model} = require('mongoose');

const TokenSchema = new Schema({
    user: {
        type: String,
        ref: 'User',
    },
    refreshToken: {type: String, required: true},
})

module.exports = model('Token', TokenSchema);
