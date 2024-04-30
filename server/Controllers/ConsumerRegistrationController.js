
const router = require("express").Router();
const{Consumer}=require("../Models/consumer");
const{BlockedConsumer}=require("../Models/blockedconsumer")
const bcrypt=require("bcrypt");
const { validate } = require("../Utils/registrationValidation");


async function consumerRegistrationController (req, res){
    try{
       
        const{error}=validate(req.body);
        const url = req.file?.path
        if(error)
        {   
            return res.status(400).send({message:error.details[0].message});
        }
        console.log(req.body)
        const consumer=await Consumer.findOne({email:req.body.email});
        
        if(consumer){
            return res.status(409).send({message:"User with given email exist"})
        }

        const blocked=await BlockedConsumer.findOne({email:req.body.email});
        console.log(blocked)
        if(blocked){
            return res.status(409).send({message:"User Blocked"})
        }

        const salt=await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword=await bcrypt.hash(req.body.password,salt);

        await new Consumer({...req.body,password:hashPassword,img:url}).save();
        res.status(201).send({message:"User created Succesfully"})
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }


}


module.exports = {consumerRegistrationController}