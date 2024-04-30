const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
// const Joi = require('joi')
// const passwordComplexity = require("joi-password-complexity")

const sellerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    pin: { type: String, required: true },
    status:{type:String,default:"Unblocked"},
    time:{type:Date,default:Date.now},
    income: { type: Number, default: 0 },
    img:{type:String,required:true}
});



sellerSchema.methods.genrateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, { expiresIn: "1d" })
    return token;
}


const Seller = mongoose.model("seller", sellerSchema);

module.exports = { Seller }