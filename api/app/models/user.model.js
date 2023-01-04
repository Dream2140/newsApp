const {Schema, model} = require('mongoose');
const crypto = require("crypto");
const {ObjectId} = require('mongodb');

console.log(ObjectId(crypto.randomUUID()))

const UserSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, default: () => ObjectId(crypto.randomUUID())},
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
