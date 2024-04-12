const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const Joi=require('joi')
const passwordComplexity=require("joi-password-complexity")

const consumerSchema=new mongoose.Schema({
    name:{type: String,required:true},
    email:{type: String,required:true },
    password:{type: String,required:true },
    phone:{type:String,required:true},
    address:{type: String,required:true },
    pin:{type: String,required:true },
    // img:{type:String,data:Buffer}
});



consumerSchema.methods.genrateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"1d"})
    return token;
}


const Consumer=mongoose.model("consumer",consumerSchema); 

module.exports={Consumer}