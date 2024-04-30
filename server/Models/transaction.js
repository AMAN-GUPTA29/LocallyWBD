const { required } = require("joi")
const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
    serviceid: { type: mongoose.SchemaTypes.ObjectId, ref: "services", required: true },
    customerid: { type: mongoose.SchemaTypes.ObjectId, ref: "consumer", required: true },
    charge: { type: Number, required: true },
    sellerid: { type: mongoose.SchemaTypes.ObjectId, ref: "seller", required: true },
    time:{type:Date,default:Date.now},
    transactionid:{type:String,required:true}
})

const Transaction = mongoose.model('transaction', transactionSchema)

module.exports = { Transaction }