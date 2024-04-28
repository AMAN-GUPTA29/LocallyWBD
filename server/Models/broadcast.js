const mongoose = require('mongoose')

const broadcastSchema = new mongoose.Schema({
    broadcastMeassage: { type: String, required: true },
    pointer: { type: String, required: true },
    time:{type:Date,default:Date.now}
})

const Broadcast = mongoose.model('broadcast', broadcastSchema)

module.exports = { Broadcast }