const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const Joi=require('joi')
const passwordComplexity=require("joi-password-complexity")

const adminSchema=new mongoose.Schema({
    name:{type: String,required:true},
    email:{type: String,required:true },
    password:{type: String,required:true },
    // img:{type:String,data:Buffer}
});

adminSchema.methods.genrateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"1d"})
    return token;
}

const Admin=mongoose.model("admin",adminSchema); 

module.exports={Admin}

