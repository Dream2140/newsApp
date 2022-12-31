const { Schema, model } = require('mongoose');
const crypto = require("crypto");
const paginate = require('mongoose-paginate-v2');

const NewsSchema = new Schema({
    _id: { type: String, default: ()=> crypto.randomUUID(), unique: true },
    title: { type: String },
    text: { type: Object },
    publishedAt: {type: Number},
    slug:  { type: String },
    image: { type: String },

});

NewsSchema.plugin(paginate);

module.exports = model('News', NewsSchema);
