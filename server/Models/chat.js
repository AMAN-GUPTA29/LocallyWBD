const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    pointer: { type: mongoose.SchemaTypes.ObjectId, ref: "chatset", required: true },
    message:{type:String,required: true},
    sender:{type:String,required: true},
    time:{type:Date,default:Date.now},
})

const Chat = mongoose.model('chat', chatSchema)

module.exports = { Chat}