const mongoose = require('mongoose')

const historySchema = new mongoose.Schema({
    customerid: { type: mongoose.SchemaTypes.ObjectId, ref: "customer", required: true },
    sellerid: { type: mongoose.SchemaTypes.ObjectId, ref: "seller", required: true },
    serviceid: { type: mongoose.SchemaTypes.ObjectId, ref: "services", required: true },
})

const History = mongoose.model('history', historySchema)

module.exports = { History }