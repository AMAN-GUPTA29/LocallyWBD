const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    consumername: { type: String },
    review: { type: String},
    rating: { type: Number, required: true },
    sellerid: { type: mongoose.SchemaTypes.ObjectId, ref: "seller", required: true },
})

const Review = mongoose.model('review', reviewSchema)

module.exports = { Review }