const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
    serviceid: { type: mongoose.SchemaTypes.ObjectId, ref: "services", required: true },
    customerid: { type: mongoose.SchemaTypes.ObjectId, ref: "consumer", required: true },
    accepted: { type: Boolean, default: false, required: true },
    sellerid: { type: mongoose.SchemaTypes.ObjectId, ref: "seller", required: true },
})

const Requests = mongoose.model('requests', requestSchema)

module.exports = { Requests }