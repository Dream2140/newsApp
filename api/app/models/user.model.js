const {Schema, model} = require('mongoose');
const crypto = require("crypto");
const paginate = require("mongoose-paginate-v2");


const UserSchema = new Schema({
    _id: {
        type: String,
        default: () => crypto.randomUUID(),
    },
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

UserSchema.plugin(paginate);

module.exports = model('User', UserSchema);
