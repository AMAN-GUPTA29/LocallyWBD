const mongoose = require('mongoose')

const broadcastSchema = new mongoose.Schema({
    broadcastMeassage: { type: String, required: true },
    pointer: { type: String, required: true },
})

const Broadcast = mongoose.model('broadcast', broadcastSchema)

module.exports = { Broadcast }