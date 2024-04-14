const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    tag: { type: String, required: true },
    charge: { type: Number },
    description: { type: String, required: true },
    pointer: { type: mongoose.SchemaTypes.ObjectId, ref: "seller" }
})

const Services = mongoose.model('services', serviceSchema)

module.exports = { Services }