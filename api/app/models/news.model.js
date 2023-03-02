const {Schema, model} = require('mongoose');
const crypto = require("crypto");
const paginate = require('mongoose-paginate-v2');

const NewsSchema = new Schema({
    id: {type: String, default: () => crypto.randomUUID(), unique: true},
    title: {type: String},
    text: {type: Object},
    publishedAt: {type: Number},
    slug: {type: String},
    image: {type: String},
    category: [
        {
            type: String,
        }]

});

NewsSchema.plugin(paginate);

module.exports = model('News', NewsSchema);
