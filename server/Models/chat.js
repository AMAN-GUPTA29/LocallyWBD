const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    pointer: { type: mongoose.SchemaTypes.ObjectId, ref: "chatset", required: true },
    message:{type:String,required: true},
})

const Chat = mongoose.model('chat', chatSchema)

module.exports = { Chat}