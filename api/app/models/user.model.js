const {Schema, model} = require('mongoose');
const crypto = require("crypto");

const UserSchema = new Schema({
    _id: {type: String, default: () => crypto.randomUUID(), unique: true},
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: () => "USER"
    },
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
});

module.exports = model('User', UserSchema);
