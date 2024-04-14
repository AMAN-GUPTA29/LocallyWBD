const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const Joi=require('joi')
const passwordComplexity=require("joi-password-complexity")

const blockedConsumerSchema=new mongoose.Schema({
    email:{type: String,required:true },
});


const BlockedConsumer=mongoose.model("blockedConsumer",blockedConsumerSchema); 

module.exports={BlockedConsumer}

