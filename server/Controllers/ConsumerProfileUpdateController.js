
const router = require("express").Router();
const{Consumer}=require("../Models/consumer");
const bcrypt=require("bcrypt");
const { validate } = require("../Utils/TokenValidate");
// const { checktokenMiddleware } = require("../Middleware/Checktoken");


async function consumerProfileUpdateController (req, res){
    try{
       
        
        console.log("here7")
        console.log(req.body)
        console.log(req.user.email)


        const user=await Consumer.updateOne({email:req.user.email},{ $set: req.body });
        console.log(user)
        if(!user.acknowledged)
        {
            res.status(500).send({message:"User not found error"});  
        }
        // print(req.body);
        // const consumer=await Consumer.findOne({email:req.body.email});
        
        // const consumer=await Consumer.updateOne({email:req.user.email});
        // const{tokn}=checktokenMiddleware(req,res)
        // console.log("verified")
        // console.log(req.user.email);

        
        res.status(201).send({message:"Updated"})  ;  
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {consumerProfileUpdateController}