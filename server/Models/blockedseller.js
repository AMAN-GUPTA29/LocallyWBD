const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const Joi=require('joi')
const passwordComplexity=require("joi-password-complexity")

const blockedSellerSchema=new mongoose.Schema({
    email:{type: String,required:true },
});


const BlockedSeller=mongoose.model("blockedSeller",blockedSellerSchema); 

module.exports={BlockedSeller}

