
const router = require("express").Router();
const{Seller}=require("../Models/seller");
const bcrypt=require("bcrypt");
// const { checktokenMiddleware } = require("../Middleware/Checktoken");


async function sellerProfileViewController (req, res){
    try{
       
       
        console.log("here7")
        // console.log(error)
        
       
        

        // const{tokn}=checktokenMiddleware(req,res)
   
        console.log("verified")
        // console.log(req.user.email);

        
        res.status(201).send({message:"founduser",email:req.user.email,name:req.user.name,phone:req.user.phone,address:req.user.address,pin:req.user.pin})  ;  
    }catch(e){
        console.log(e)
        res.status(500).send({message:"internl server error"})
    }
}


module.exports = {sellerProfileViewController}