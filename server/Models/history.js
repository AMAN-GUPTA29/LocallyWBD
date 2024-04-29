const { boolean, string } = require('joi')
const mongoose = require('mongoose')

const historySchema = new mongoose.Schema({
    customerid: { type: mongoose.SchemaTypes.ObjectId, ref: "consumer", required: true },
    sellerid: { type: mongoose.SchemaTypes.ObjectId, ref: "seller", required: true },
    serviceid: { type: mongoose.SchemaTypes.ObjectId, ref: "services", required: true },
    time:{type:Date,default:Date.now},
    status:{type:String,default:"pending"},
    datecompleted:{type:Date,default:Date.now},
})

const History = mongoose.model('history', historySchema)

module.exports = { History }