
const mongoose = require('mongoose')

const chatSetSchema = new mongoose.Schema({
    customerid: { type: mongoose.SchemaTypes.ObjectId, ref: "consumer", required: true },
    sellerid: { type: mongoose.SchemaTypes.ObjectId, ref: "seller", required: true },
})

const ChatSet = mongoose.model('chatset', chatSetSchema)

module.exports = { ChatSet }