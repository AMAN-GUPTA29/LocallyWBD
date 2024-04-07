
const router = require("express").Router();
const{Consumer}=require("../Models/consumer");
const bcrypt=require("bcrypt");
const { validate } = require("../Utils/TokenValidate");
// const { checktokenMiddleware } = require("../Middleware/Checktoken");


async function consumerProfileViewController (req, res){
    try{
       
       
        console.log("here7")
        // console.log(error)
        
       
        

        // const{tokn}=checktokenMiddleware(req,res)
   
        console.log("verified")
        console.log(req.user.email);

        
        res.status(201).send({message:"founduser",email:req.user.email,name:req.user.name,address:req.user.address,pin:req.user.pin})  ;  
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {consumerProfileViewController}