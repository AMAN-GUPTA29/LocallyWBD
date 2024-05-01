const router = require("express").Router();
const{Admin}=require("../Models/admin");
const bcrypt=require("bcryptjs");
const { validate } = require("../Utils/adminRegistrationValidation");

async function adminRegistrationController (req, res){
    try{
       
        const{error}=validate(req.body);
        
        if(error)
        {   
            return res.status(400).send({message:error.details[0].message});
        }
        console.log(req.body)
        const admin=await Admin.findOne({email:req.body.email});
        
        if(admin){
            return res.status(409).send({message:"User with given email exist"})
        }

        const salt=await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword=await bcrypt.hash(req.body.password,salt);

        await new Admin({...req.body,password:hashPassword}).save();
        res.status(201).send({message:"User created Succesfully"})
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }


}


module.exports = {adminRegistrationController}