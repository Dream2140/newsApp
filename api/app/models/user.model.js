const { Schema, model } = require('mongoose');
const crypto = require("crypto");

const NewsSchema = new Schema({
    _id: { type: String, default: ()=> crypto.randomUUID(), unique: true },
    nickname: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    status: { type: String, default: ()=> "user" },
    token: { type: String },
});

module.exports = model('User', NewsSchema);
