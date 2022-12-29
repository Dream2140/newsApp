const { Schema, model } = require('mongoose');
const crypto = require("crypto");

const NewsSchema = new Schema({
    _id: { type: String, default: ()=> crypto.randomUUID() },
    title: { type: String },
    text: { type: String },
    publishedAt: {type: Number},
    slug:  { type: String },
    image: { type: String },

});

module.exports = model('News', NewsSchema);
